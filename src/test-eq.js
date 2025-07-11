import cards from './cards.js'
import cards_jp from './cards-jp.js'
import { diff } from 'json-diff'

const cards_grouped = cards.reduce((res, card) => {
    (res[card.id] = res[card.id] || []).push(card);
    return res
}, {})
const cards_jp_grouped = cards_jp.reduce((res, card) => {
    (res[card.id] = res[card.id] || []).push(card);
    return res
}, {})

for (const [id, card_group] of Object.entries(cards_grouped)) {
    const card_jp_group = cards_jp_grouped[id]

    const card_group_unnamed = card_group.map(card => {
        const card_unnamed = card
        card_unnamed.char_name = ''
        return card_unnamed
    })

    const card_jp_group_unnamed = card_jp_group.map(card => {
        const card_unnamed = card
        card_unnamed.char_name = ''
        return card_unnamed
    })

    if (diff(card_jp_group_unnamed, card_group_unnamed)) {
        console.log(`${id} is different!`)
    }
}