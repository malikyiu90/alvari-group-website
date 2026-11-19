export type Service = {
  slug: string
  nav: string
  h1: string
  img: string
  short: string
  lede: string
  intro: string
  blocks: { h: string; html: string }[]
  signs: string[]
  spec: [string, string][]
  faq: { q: string; a: string }[]
}

export const services: Service[] = [
  {
    slug: 'roof-repairs',
    nav: 'Roof repairs',
    h1: 'Roof repairs in Leicestershire',
    img: 'svc-repairs',
    short: 'Leaks traced to the actual cause, not patched over.',
    lede: 'A leak almost never starts where the stain appears on your ceiling. We find where the water is really getting in, show you, and fix that.',
    intro: 'Most of the repairs we are called to could have been a hundred-pound job six months earlier. Water travels along battens and rafters before it drops, so by the time a ceiling is marked the entry point can be several metres away and uphill. We survey the whole roof rather than the patch under the stain.',
    blocks: [
      {
        h: 'What usually turns out to be the cause',
        html: '<ul><li><strong>Slipped or missing slates and tiles.</strong> Often nail fatigue rather than wind — the nails rust through and the slate lets go on a still day.</li><li><strong>Failed valleys.</strong> Where two roof slopes meet is the hardest-working part of a roof and the first to go.</li><li><strong>Cracked flaunching and perished mortar</strong> around chimneys and ridges.</li><li><strong>Lead flashing</strong> that has split, lifted, or was never dressed properly in the first place.</li><li><strong>Blocked or back-falling gutters</strong> pushing water behind the fascia instead of away from it.</li></ul>',
      },
      {
        h: 'How we price it',
        html: '<p>Small repairs are quoted as a fixed price after the survey. We do not work on a day rate, so a job that turns out to be quicker does not become a job that mysteriously takes all day.</p><p>If the honest answer is that the roof is past repair and patching it is throwing money away, we will say that and quote for the alternative. You are free to ignore us.</p>',
      },
    ],
    signs: [
      'A damp patch or stain on an upstairs ceiling',
      'Daylight visible through the roof from inside the loft',
      'Slates or tiles on the lawn after wind',
      'Damp or crumbling plaster on a chimney breast',
      'Water running down an outside wall rather than into the gutter',
      'Moss growth lifting the courses apart',
    ],
    spec: [
      ['Response', 'Same day for leaks where we can get access'],
      ['Survey', 'Free, with photographs of every defect'],
      ['Quote', 'Fixed price, valid 60 days'],
      ['Deposit', 'None'],
    ],
    faq: [
      { q: 'Can you repair a roof in the rain?', a: 'We can make it safe and sheet it over in almost any weather. A permanent repair needs the surface dry enough for mortar or sealant to bond, so the finished fix may wait a day.' },
      { q: 'Will one slipped tile really cause a leak?', a: 'Frequently, yes. The membrane underneath is a second line of defence, not a roof. Once it is exposed to UV through a gap it degrades fast.' },
      { q: 'Do you charge for the survey?', a: 'No. The survey and the written quote are free whether or not you go ahead.' },
    ],
  },
  {
    slug: 're-roofing',
    nav: 'Re-roofing & new roofs',
    h1: 'Re-roofing and new roofs',
    img: 'svc-reroof',
    short: 'Full strip and re-cover, with a written guarantee.',
    lede: 'When a roof has reached the end of its life, patching it costs more over five years than replacing it once. A full re-roof is a week of disruption and then thirty years of not thinking about it.',
    intro: 'A re-roof is not just new tiles. Everything underneath comes off: the old covering, the battens, and the felt. What goes back on is a breathable membrane, new treated battens gauged to the covering, and the tiles or slates you choose. Anything structural we find on the way is shown to you and priced before it is touched.',
    blocks: [
      {
        h: 'What a full re-roof includes',
        html: '<ul><li>Scaffold erected to the full working height, with edge protection.</li><li>Strip of the existing covering, battens and felt, and removal from site.</li><li>Inspection of rafters and wall plates, with anything rotten reported before it is replaced.</li><li>New breathable underlay and new treated battens.</li><li>New covering, with ridges and hips bedded or dry-fixed to current practice.</li><li>New lead to chimneys, valleys and abutments where needed.</li><li>Site cleared, and a written guarantee issued on completion.</li></ul>',
      },
      {
        h: 'Dry fix versus mortar',
        html: '<p>Ridges and verges were traditionally bedded in mortar. Mortar cracks, and once it cracks it lets water in and lets wind under. Dry-fix systems clamp mechanically and are what current British Standards expect on a new roof.</p><p>On a conservation-area property, where the planning officer will want the look of mortar, we use dry fix where it is not visible and mortar where it is.</p>',
      },
    ],
    signs: [
      'The roof is over 50 years old and has never been stripped',
      'You are repairing it more than once a year',
      'Several tiles have delaminated or are shedding their faces',
      'The ridge line visibly dips or waves',
      'The underfelt is torn or hanging in the loft',
      'You are extending or converting the loft anyway',
    ],
    spec: [
      ['Typical duration', '4–8 days for a standard semi, weather permitting'],
      ['Scaffold', 'Included in the quote'],
      ['Waste', 'Removed and disposed of by us'],
      ['Guarantee', 'Written workmanship guarantee on completion'],
    ],
    faq: [
      { q: 'Do I have to move out?', a: 'No. The roof comes off in sections and the property stays weathertight overnight. Expect noise during working hours and dust in the loft.' },
      { q: 'Does a re-roof need Building Control?', a: 'If more than 25% of the roof area is being re-covered it is notifiable work under Part L. We handle the notification where the job requires it.' },
      { q: 'Can I change the tile type?', a: 'Usually, but the weight matters. Swapping slate for concrete can load the structure beyond what it was built for, so the survey checks the rafters first.' },
    ],
  },
  {
    slug: 'flat-roofing',
    nav: 'Flat roofing',
    h1: 'Flat roofing: EPDM, GRP and felt',
    img: 'svc-flat',
    short: 'Extensions, dormers, garages and porches.',
    lede: 'A flat roof is only as good as its detailing. The membrane rarely fails in the middle — it fails at the upstands, the outlets and the joins.',
    intro: 'Most flat roofs we replace were not badly built so much as badly finished. Water finds the edges. We take the time on the perimeter trims, the upstands against the wall, and the fall to the outlet, because that is where the next twenty years are decided.',
    blocks: [
      {
        h: 'The three systems we fit',
        html: '<ul><li><strong>EPDM rubber.</strong> A single sheet with no seams on most domestic roofs, so there is very little to fail. Our usual recommendation for extensions and garages.</li><li><strong>GRP fibreglass.</strong> Laid wet and cured in place, giving a hard, walkable surface. Good for balconies and anywhere it will be stood on.</li><li><strong>Torch-on felt.</strong> Multi-layer, bonded with heat. The most economical option and still a sound one when properly specified.</li></ul>',
      },
      {
        h: 'Falls and outlets',
        html: '<p>A flat roof is not flat. It needs a fall of at least 1:80 after deflection to shed water, and standing water is what shortens a membrane&rsquo;s life more than anything else.</p><p>If your existing roof ponds, we will usually build the fall back in with tapered insulation rather than lay a new membrane over the same problem.</p>',
      },
    ],
    signs: [
      'Water ponding for more than 48 hours after rain',
      'Blistering, splitting or crazing on the surface',
      'The membrane has lifted away from the upstand',
      'Stains on the ceiling below the flat section',
      'Felt that has gone brittle and lost its mineral finish',
      'A dormer cheek that is damp inside',
    ],
    spec: [
      ['EPDM', '1.2–1.5mm single-ply membrane'],
      ['GRP', 'Laid over 18mm OSB3 deck'],
      ['Typical duration', '1–2 days for a standard extension'],
      ['Insulation', 'Upgraded to current Part L where the deck comes off'],
    ],
    faq: [
      { q: 'How long does a flat roof last?', a: 'A well-detailed EPDM roof should give 25–30 years. Felt is usually 15–20. The difference is almost always the detailing, not the material.' },
      { q: 'Can you go over the existing roof?', a: 'Sometimes, but only if the deck is sound and dry. Overlaying a wet deck traps the moisture and you pay twice.' },
      { q: 'Is a flat roof worse than a pitched one?', a: 'No, it is just less forgiving of poor workmanship. A properly laid flat roof outlasts a badly laid pitched one.' },
    ],
  },
  {
    slug: 'slate-and-tile',
    nav: 'Slate & tile',
    h1: 'Slate and tile roofing',
    img: 'svc-tall',
    short: 'Natural slate, clay pantiles and concrete interlocking.',
    lede: 'Matching an existing roof matters more than most people expect. Get the covering wrong and the house looks wrong from the street for the next forty years.',
    intro: 'Leicestershire has everything from Victorian terraces in Welsh slate to interwar semis in clay pantile and modern estates in concrete interlocking. Each wants a different gauge, a different lap and a different fixing. We work to the covering the roof was designed for unless there is a good reason to change it.',
    blocks: [
      {
        h: 'Coverings we fit',
        html: '<ul><li><strong>Natural slate</strong> — Welsh, Spanish and reclaimed. The longest-lived covering there is, and the one that most rewards being laid properly.</li><li><strong>Clay plain tiles and pantiles</strong> — the traditional covering across much of the county, and the one conservation officers expect.</li><li><strong>Concrete interlocking</strong> — the standard on post-war and new-build estates. Quick to lay, heavier than clay, and the cheapest per square metre.</li></ul>',
      },
      {
        h: 'Why gauge and lap matter',
        html: '<p>The gauge is the spacing of the battens, and the lap is how far each course covers the one below. Too wide a gauge saves tiles and leaks at the first driving rain; too tight wastes money.</p><p>Both depend on the pitch of your roof and how exposed it is. We set them from the manufacturer&rsquo;s figures for your pitch, not from habit.</p>',
      },
    ],
    signs: [
      'Slates delaminating or sounding dull when tapped',
      'Tiles spalling or losing their surface',
      'Nail sickness — slates slipping with no storm to blame',
      'Mismatched repairs from previous work',
      'A roof that was re-covered without the battens being renewed',
      'Conservation-area work needing a like-for-like match',
    ],
    spec: [
      ['Natural slate', 'Welsh, Spanish and reclaimed'],
      ['Clay', 'Plain tile and pantile'],
      ['Concrete', 'Interlocking and plain'],
      ['Fixings', "To manufacturer's spec for your pitch and exposure"],
    ],
    faq: [
      { q: 'Can you match my existing slate?', a: 'Usually. Reclaimed stock is the closest match for a Victorian roof, and we source it to size rather than taking whatever is in the yard.' },
      { q: 'Is slate worth the extra over concrete?', a: 'Over a 30-year horizon the cost is similar, because slate lasts longer. Over a 10-year horizon concrete is cheaper. It also depends on what the house wants to look like.' },
      { q: 'What pitch does slate need?', a: 'Generally 20 degrees and above, though it depends on the slate size and exposure. Below that we would look at a different covering.' },
    ],
  },
  {
    slug: 'guttering-fascias-soffits',
    nav: 'Guttering, fascias & soffits',
    h1: 'Guttering, fascias and soffits',
    img: 'work1',
    short: 'The roofline, repaired or fully replaced.',
    lede: 'The roofline is the cheapest part of a roof to maintain and the most expensive to ignore. Water running down a wall for two winters costs more to put right than new guttering.',
    intro: 'Gutters, fascias and soffits are a system. A sagging gutter is usually a rotten fascia behind it, and a rotten fascia is usually a gutter that has been overflowing for years. We price the whole roofline rather than patching one element and leaving the cause.',
    blocks: [
      {
        h: 'What we do',
        html: '<ul><li><strong>Full uPVC replacement</strong> — fascia, soffit, gutter and downpipe, with the old timber removed rather than capped over.</li><li><strong>Seamless aluminium gutter</strong> — rolled on site to the exact run, so there are no joints to fail. Worth it on long frontages.</li><li><strong>Repairs and re-falls</strong> — where the system is sound but the fall is wrong or the brackets have let go.</li><li><strong>Clearing and inspection</strong> — and an honest answer about whether more is needed.</li></ul>',
      },
      {
        h: 'Capping over is not replacing',
        html: '<p>A common cheap job is to nail uPVC board over the existing timber fascia. It looks finished on day one. The timber behind it is still wet, and it keeps rotting out of sight until the brackets pull out.</p><p>We take the old timber off. If you have been quoted a figure that seems low, ask whether it is a cap-over.</p>',
      },
    ],
    signs: [
      'Gutters overflowing at the same spot every heavy rain',
      'Green or black staining running down the wall below',
      'Fascia board soft, flaking or visibly sagging',
      'Birds or wasps getting in at the soffit',
      'Downpipe loose from the wall',
      'Paint peeling on the roofline every year',
    ],
    spec: [
      ['uPVC', 'Full replacement, old timber removed'],
      ['Aluminium', 'Seamless, rolled on site'],
      ['Guttering', 'Set to a true fall to the outlet'],
      ['Access', 'Scaffold or tower as the job requires'],
    ],
    faq: [
      { q: 'Do I need scaffolding for guttering?', a: 'On a bungalow usually not. On a two-storey house we would rather use a tower or scaffold than work off a ladder, and the quote says which.' },
      { q: 'How often should gutters be cleared?', a: 'Once a year, and twice if you have trees nearby. Most of the leaks we attend in autumn are blocked gutters, not roofs.' },
      { q: 'Can you match my existing colour?', a: 'Black, white, anthracite grey and woodgrain are all standard. We match what is there unless you want a change.' },
    ],
  },
  {
    slug: 'chimneys-and-leadwork',
    nav: 'Chimneys & leadwork',
    h1: 'Chimneys and leadwork',
    img: 'blog3',
    short: 'Repointing, re-flaunching, removals and hand-dressed lead.',
    lede: 'More roof leaks start at a chimney than anywhere else on the roof. It is the one place where the covering has to stop and start again.',
    intro: 'A chimney interrupts the roof, and every interruption needs lead. Where lead has been replaced with mortar, mastic or flashing tape — and it often has — the repair will fail within a few winters. We dress lead by hand to the roof it sits on.',
    blocks: [
      {
        h: 'The work we do',
        html: '<ul><li><strong>Repointing</strong> the stack where the mortar has perished.</li><li><strong>Re-flaunching</strong> — renewing the mortar fillet that holds the pots.</li><li><strong>New lead flashing, soakers and back gutters</strong>, dressed on site.</li><li><strong>Chimney removal</strong>, down to roof level or all the way, with the roof made good.</li><li><strong>Capping and ventilating</strong> a disused stack so it stays dry.</li></ul>',
      },
      {
        h: 'Why code matters',
        html: '<p>Lead is specified by code — the thickness. Code 4 is the usual minimum for soakers and flashings; code 5 for back gutters and anywhere that carries real volumes of water.</p><p>Thinner lead is cheaper and it creeps and splits. Lead should also be laid in lengths no longer than 1.5m so it can move with temperature without tearing. Both are in BS 6915, and both are routinely ignored.</p>',
      },
    ],
    signs: [
      'Damp patches on a chimney breast inside',
      'Mortar crumbling from the stack or the pots loose',
      'Flashing tape or mastic visible where lead should be',
      'A leaning stack',
      'White staining on the brickwork',
      'A disused chimney that was capped without a vent',
    ],
    spec: [
      ['Lead', 'Code 4 and 5, hand-dressed, to BS 6915'],
      ['Lengths', 'Maximum 1.5m per piece to allow movement'],
      ['Repointing', 'Lime or cement to suit the brickwork'],
      ['Removal', 'To roof level or full, roof made good'],
    ],
    faq: [
      { q: 'Can you just use flashing tape?', a: 'As a temporary make-safe, yes. As a repair, no — it is a short-term fix sold as a permanent one and we will not quote it as such.' },
      { q: 'Should I remove my unused chimney?', a: 'Not necessarily. A capped and vented stack stays dry and keeps the look of the house. Removal makes sense when it is structurally poor.' },
      { q: 'Why is lead so expensive?', a: 'It is a commodity and it is priced by weight. A chimney needs a surprising amount of it. It also lasts far longer than anything cheaper.' },
    ],
  },
  {
    slug: 'storm-damage',
    nav: 'Storm damage & emergency',
    h1: 'Storm damage and emergency roofing',
    img: 'svc-storm',
    short: '24-hour make-safe, and the insurance paperwork handled.',
    lede: 'We answer the phone 24 hours a day. If your roof has opened up tonight, the first job is to stop more water coming in — the rest can wait until daylight.',
    intro: 'Storm work splits into two halves. Make-safe happens now: sheeting over, removing anything that could fall, and getting the property watertight. The permanent repair happens once we can see what we are dealing with and, where an insurer is involved, once the claim is agreed.',
    blocks: [
      {
        h: 'What happens when you call',
        html: '<ol><li>We ask what you can see and whether anyone is at risk. If there is a danger to people below, that is a 999 call first.</li><li>We attend and make the property safe — sheeting, removing loose material, isolating the area.</li><li>We photograph everything, which is what your insurer will want.</li><li>We give you a written quote for the permanent repair, itemised so the insurer can assess it.</li></ol>',
      },
      {
        h: 'Insurance work',
        html: '<p>Most storm damage is covered. Insurers normally pay for make-safe work carried out urgently, provided it is documented — which is why we photograph before we touch anything.</p><p>We deal with loss adjusters regularly and will talk to yours directly if you would rather we did. What we will not do is inflate a quote because an insurer is paying.</p>',
      },
    ],
    signs: [
      'Tiles or slates off and water coming in now',
      'Part of the roof visibly lifted or displaced',
      'A chimney or ridge that has moved',
      'A fallen tree or branch on the roof',
      'Lead flashing peeled back by wind',
      'Fence panels and debris suggesting a localised gust',
    ],
    spec: [
      ['Availability', '24 hours, 7 days a week'],
      ['Make-safe', 'Sheeting and temporary covering'],
      ['Documentation', 'Photographs for your claim'],
      ['Insurer', 'We will deal with the loss adjuster direct'],
    ],
    faq: [
      { q: 'Will my insurance cover it?', a: 'Storm damage usually is covered; wear and tear is not. The distinction turns on evidence, which is why we photograph the roof before any work.' },
      { q: 'Do you charge extra at night?', a: 'Emergency attendance is priced in the quote and you are told the figure before we come out. There is no surprise call-out charge.' },
      { q: 'How quickly can you get here?', a: 'For a property taking water in we aim for same day. Scaffold for the permanent repair takes longer to arrange.' },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
