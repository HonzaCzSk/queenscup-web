// Jednorázová migrace: doplní pole `year` do dokumentů team, match a gallery,
// které ho ještě nemají (včetně rozpracovaných draftů).
//
// Spuštění (ve složce sanity/):
//   Nanečisto (nic nezapíše):  npx sanity exec scripts/add-year.ts --with-user-token
//   Naostro:                   npx sanity exec scripts/add-year.ts --with-user-token -- --apply
import { getCliClient } from 'sanity/cli'

declare const process: {
    env: any
    argv: string[]
    exit: (code?: number) => never
}

const YEAR = 2026
const TYPES = ['team', 'match', 'gallery']
const APPLY = process.argv.includes('--apply') || process.env.APPLY === '1'

const client = getCliClient({ apiVersion: '2024-01-01' }).withConfig({
    perspective: 'raw', // aby se zahrnuly i drafts.*
    useCdn: false,
})

async function main() {
    const docs: { _id: string; _type: string }[] = await client.fetch(
        `*[_type in $types && !defined(year)]{ _id, _type }`,
        { types: TYPES },
    )

    const counts: Record<string, number> = {}
    for (const d of docs) counts[d._type] = (counts[d._type] ?? 0) + 1
    console.log(`Nalezeno dokumentů bez roku: ${docs.length}`, counts)

    if (!APPLY) {
        console.log('Nanečisto – nic jsem nezapsal. Pro zápis přidej: -- --apply')
        return
    }

    const BATCH = 100
    for (let i = 0; i < docs.length; i += BATCH) {
        const tx = client.transaction()
        for (const d of docs.slice(i, i + BATCH)) {
            tx.patch(d._id, p => p.setIfMissing({ year: YEAR }))
        }
        await tx.commit()
        console.log(`Zapsáno ${Math.min(i + BATCH, docs.length)} / ${docs.length}`)
    }
    console.log(`Hotovo: ročník ${YEAR} doplněn.`)
}

main().catch(err => {
    console.error(err)
    process.exit(1)
})
