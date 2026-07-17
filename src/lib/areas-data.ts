export interface AreaData {
  slug: string;
  name: string;
  title: string;
  description: string;
  heading: string;
  subheading: string;
  intro: string;
  context: string;
  features: string[];
  lat: number;
  lng: number;
  postalCode: string;
}

export const areas: Record<string, AreaData> = {
  "morningside-bruntsfield": {
    slug: "morningside-bruntsfield",
    name: "Morningside & Bruntsfield",
    title: "Helibar Repair Morningside & Bruntsfield | Stone Crack Stitching",
    description: "Expert structural stonework, Helibar repair, and abseil masonry stitching in Morningside and Bruntsfield. Traditional stone villas & tenement specialists.",
    heading: "Stonework & Helibar Repair in Morningside & Bruntsfield",
    subheading: "Scaffold-Free Structural Repairs for South Edinburgh's Historic Properties",
    intro: "Morningside and Bruntsfield feature some of Edinburgh's finest Victorian villas and grand blonde sandstone tenements. Over time, many of these prestige properties suffer from natural settlement, sandstone weathering, and lintel movement, leading to structural cracks.",
    context: "Our specialized Helibar reinforcement system offers a permanent, completely invisible solution to cracked masonry. Instead of costly, invasive stone replacement, we stitch the cracked sandstone using high-tensile stainless steel Helibars embedded into the mortar joints. Using rope access (abseiling), our IRATA-certified team can reach high-level bay windows and chimney stacks directly—saving you thousands of pounds on scaffolding costs and minimizing disruption to your neighborhood.",
    features: [
      "Specialist repairs for Victorian blonde sandstone",
      "No intrusive scaffolding blocking your windows",
      "Concealed repairs that preserve heritage value",
      "Full structural stabilization with a 10-year guarantee"
    ],
    lat: 55.9272,
    lng: -3.2098,
    postalCode: "EH10 4SG"
  },
  "new-town-west-end": {
    slug: "new-town-west-end",
    name: "New Town & West End",
    title: "Georgian Stone Repairs New Town & West End | Helibar Stitching",
    description: "Invisible structural masonry repairs, stone pinning, and Helibar reinforcement in Edinburgh's New Town and West End. UNESCO Conservation specialists.",
    heading: "Structural Stone Repairs in New Town & West End",
    subheading: "Sympathetic Heritage Masonry Repairs for UNESCO Georgian Townhouses",
    intro: "Edinburgh's New Town and West End are globally recognized for their immaculate Georgian architecture, constructed using premium Craigleith and Hailes grey ashlar sandstone. The structural integrity of these classic townhouses is strictly protected by conservation regulations, demanding highly sympathetic repair methodologies.",
    context: "When cracking or structural movement occurs in these historic facades—frequently around high-level lintels, canted bays, or decorative stone balconies—traditional methods require extensive scaffolding and stone replacement. Stone-Stitch offers a revolutionary alternative. Our Helibar crack stitching system is completely concealed within the lime mortar beds, restoring full structural strength without altering the historic facade. Our IRATA abseil technicians complete repairs rapidly, bypassing the need for intrusive scaffold frames that disrupt traffic and detract from historic streetscapes.",
    features: [
      "UNESCO World Heritage & Conservation compliant repairs",
      "Completely invisible crack stitching using traditional lime mortars",
      "No scaffolding required—safely completed via abseil",
      "Experienced local heritage stonemasons"
    ],
    lat: 55.9535,
    lng: -3.2058,
    postalCode: "EH3 6EE"
  },
  "stockbridge-trinity": {
    slug: "stockbridge-trinity",
    name: "Stockbridge & Trinity",
    title: "Stonework Repairs Stockbridge & Trinity | Helibar reinforcement",
    description: "Abseil stone repairs and Helibar crack stitching in Stockbridge and Trinity. Expert solutions for traditional stone cottages and tenements.",
    heading: "Masonry & Helibar Repair in Stockbridge & Trinity",
    subheading: "Structural Stabilization for Historic Edinburgh Townhouses & Villas",
    intro: "Stockbridge's bohemian colony houses and Trinity's elegant coastal villas are heavily exposed to Scotland's damp, maritime climate. Moisture-induced mortar washout and high-level architectural shifting are common structural challenges for these beautiful, traditional stone buildings.",
    context: "Water ingress and freeze-thaw cycles frequently compromise the bond between stone courses, leading to bowing masonry or prominent stepped cracks. Our engineered Helibar crack stitching locks the masonry back together. Our IRATA-certified abseil team completes these high-precision structural repairs safely and cleanly, directly accessing tall chimney breasts and coastal facades without the immense setup and rental cost of traditional steel scaffolding.",
    features: [
      "Designed for damp coastal and riverside environments",
      "Scaffold-free rope access for high chimney stacks & facades",
      "Traditional lime-pointing finish matches aged sandstone",
      "Fast, cost-effective structural reinforcement"
    ],
    lat: 55.9612,
    lng: -3.2085,
    postalCode: "EH4 1ND"
  },
  "leith-portobello": {
    slug: "leith-portobello",
    name: "Leith & Portobello",
    title: "Stone Repair Leith & Portobello | Tenement & Seaside Masonry",
    description: "Specialist stone repairs, spalling sandstone stabilization, and Helibar crack stitching in Leith and Portobello. Scaffold-free tenement repairs.",
    heading: "Structural Stone Repair in Leith & Portobello",
    subheading: "Durable Masonry Stitching for Historic Ports & Seaside Villas",
    intro: "Leith's industrial stone tenements and Portobello's iconic seaside Victorian villas face aggressive marine weathering. High salt-spray environments accelerate sandstone spalling and mortar decay, causing critical masonry cracking and structural weakness.",
    context: "Our high-tensile stainless steel Helibar system is chemically resistant and ideally suited to maritime environments. We insert these threaded bars directly into the mortar joints to reinforce cracked brick and sandstone lintels, redistributing structural stress across the wall. Because Portobello and Leith properties often feature busy high streets or narrow seaside lanes, abseil rope access is the perfect solution—eliminating the need for council scaffolding permits and protecting public access.",
    features: [
      "Marine-grade stainless steel Helibar reinforcement",
      "Perfect for busy high-street tenements and narrow lanes",
      "Prevents spalling sandstone from becoming a falling hazard",
      "Avoids costly scaffolding permits and council fees"
    ],
    lat: 55.9734,
    lng: -3.1668,
    postalCode: "EH6 6DA"
  },
  "corstorphine-murrayfield": {
    slug: "corstorphine-murrayfield",
    name: "Corstorphine & Murrayfield",
    title: "Structural Stone Repairs Corstorphine & Murrayfield | Helibar",
    description: "Professional Helibar reinforcement and crack stitching for residential stone villas in Corstorphine and Murrayfield. Free structural assessments.",
    heading: "Stonework & Helibar Repair in Corstorphine & Murrayfield",
    subheading: "Premium Crack Stitching Solutions for West Edinburgh Homes",
    intro: "Corstorphine and Murrayfield boast beautiful, high-value suburban homes, ranging from late Victorian mansions to mid-century stone villas. Foundation settlement and local soil shifting can cause structural stepped cracking, particularly around extensions and grand bay windows.",
    context: "If your property is exhibiting diagonal cracks running from window corners or between stone courses, it is essential to restore the load distribution. Our Helibar masonry stitching system reinforces the wall's tensile strength, locking cracked stone blocks back together. Our team specializes in neat, domestic repairs. We match the sandstone color and texture precisely, leaving a structural fix that is virtually invisible to the naked eye.",
    features: [
      "Engineered solutions for residential foundation settlement",
      "Seamless color-matched repairs preserve kerb appeal",
      "Ideal for grand stone bay windows and extensions",
      "Comprehensive structural guarantee for peace of mind"
    ],
    lat: 55.9423,
    lng: -3.2798,
    postalCode: "EH12 7LQ"
  },
  "colinton-grange": {
    slug: "colinton-grange",
    name: "Colinton & Grange",
    title: "Conservation Stone Repairs Colinton & Grange | Helibar Pinning",
    description: "Conservation-standard stone repairs, structural pinning, and Helibar crack stitching in Colinton and the Grange. Premium heritage specialists.",
    heading: "Heritage Stone & Helibar Repair in Colinton & Grange",
    subheading: "Conservation-Standard Structural Repairs for Prestigious Estates",
    intro: "The Grange and Colinton represent some of Scotland's most exclusive residential conservation areas. These neighborhoods feature grand Victorian mansions and historic stone cottages set in mature woodland, where tree root encroachment and age-related shifting cause subtle structural cracks.",
    context: "Maintaining the absolute heritage authenticity of these properties is paramount. Our Helibar stitching and stone pinning services utilize traditional lime formulations, blending seamlessly with the original yellow and red sandstones. Our IRATA rope access abseil technicians work with extreme care, executing high-level repairs to massive chimneys and decorative gables without erecting heavy scaffolding, safeguarding your private gardens and landscaping from heavy equipment.",
    features: [
      "Conservation-standard repairs using authentic lime mortars",
      "No heavy machinery or scaffold frames to damage lawns or gardens",
      "High-level masonry pinning for heavy cornices & gables",
      "Discreet and highly professional local service"
    ],
    lat: 55.9085,
    lng: -3.2543,
    postalCode: "EH13 0JY"
  },
  "stirling": {
    slug: "stirling",
    name: "Stirling",
    title: "Helibar Stone Repair Stirling | Structural Masonry Stitching",
    description: "Expert stone crack repairs and Helibar stabilization in Stirling and Central Scotland. Scaffold-free abseil masonry repair.",
    heading: "Structural Stone Repair in Stirling & Central Scotland",
    subheading: "Engineering Integrity for Stirling's Traditional & Heritage Facades",
    intro: "Stirling's rich historic center and surrounding Victorian suburbs contain spectacular stone structures that endure heavy Central Scotland rainfall and severe winter frosts. Exposed sandstone lintels, arches, and stone mullions frequently undergo weathering, leading to structural failures.",
    context: "When stone arches or lintels crack, they fail to distribute the downward weight, resulting in widening cracks above windows and doors. Our Helibar reinforcement restores the structural header beam's strength by reinforcing the horizontal masonry courses. We stitch the cracked areas using high-tensile stainless steel, completely bypassing the massive, expensive scaffold rigs traditionally required to work on Stirling's sloped streets.",
    features: [
      "Engineered structural lintel & arch stabilization",
      "Highly competitive alternative to full stonework replacement",
      "Rope access bypasses the challenge of Stirling's steep, sloped roads",
      "Fully insured with a 10-year structural guarantee"
    ],
    lat: 56.1165,
    lng: -3.9369,
    postalCode: "FK8 1EA"
  },
  "dunfermline": {
    slug: "dunfermline",
    name: "Dunfermline",
    title: "Helibar Repair Dunfermline | Stone Crack Stitching Fife",
    description: "Specialist structural stone repair and Helibar masonry stitching in Dunfermline and West Fife. Fast, scaffold-free abseil solutions.",
    heading: "Masonry & Helibar Repair in Dunfermline & Fife",
    subheading: "Expert Structural Crack Stitching for Fife's Heritage Homes",
    intro: "Dunfermline, Fife's historic capital, contains a diverse mix of traditional stone tenements, miner's cottages, and modern masonry properties. Historic ground movement and coal-mining legacy settlement can lead to severe structural cracking in brick and sandstone facades.",
    context: "Rather than letting cracking compromise your property value, our Helibar crack stitching system can quickly and permanently restore structural integrity. We grind out the mortar joints, install high-tensile stainless steel bars embedded in shrink-compensated grout, and repoint. This forms a structural bond that absorbs future tension, preventing cracks from reappearing. Our abseil capabilities mean we complete repairs in days, avoiding FRC scaffold permits and public walkway closures.",
    features: [
      "Effective protection against historic ground movement cracking",
      "Saves up to 70% compared to traditional stone replacement",
      "Fife-wide rapid response team for residential properties",
      "No scaffolding blocking paths or driveways"
    ],
    lat: 56.0715,
    lng: -3.4523,
    postalCode: "KY12 7DR"
  },
  "falkirk-linlithgow": {
    slug: "falkirk-linlithgow",
    name: "Falkirk & Linlithgow",
    title: "Stone Repairs Falkirk & Linlithgow | Helibar Crack Stitching",
    description: "Expert structural masonry repairs and Helibar crack stitching in Falkirk and Linlithgow. Specialized solutions for traditional damp & settlement cracks.",
    heading: "Stonework & Helibar Repair in Falkirk & Linlithgow",
    subheading: "Innovative Structural Masonry Stabilization along the Central Belt",
    intro: "The historic canal corridors of Falkirk and Linlithgow are lined with traditional Victorian sandstone properties. High local damp levels can weaken original mortar, leading to lateral shifting, bulging masonry, and structural cracks.",
    context: "Our Helibar reinforcement and crack stitching systems provide exceptional lateral restraint, securing separated masonry walls back together. By bonding stainless steel bars horizontally into the mortar joints, we establish a rigid reinforcement structure that prevents further wall movement. Our IRATA abseil technicians deploy quickly across the Central Belt, offering a fast, clean, and highly affordable service tailored for domestic homeowners.",
    features: [
      "Excellent lateral restraint for bulging or separating walls",
      "Resilient, corrosion-resistant stainless steel technology",
      "Rapid deployment across the Central Belt—no scaffolding needed",
      "Substantially cheaper than full masonry reconstruction"
    ],
    lat: 55.9793,
    lng: -3.6033,
    postalCode: "EH49 7AL"
  },
  "haddington-east-lothian": {
    slug: "haddington-east-lothian",
    name: "Haddington & East Lothian",
    title: "Helibar Repair Haddington & East Lothian | Stone Crack Stitching",
    description: "Traditional stone repairs, red sandstone conservation, and Helibar reinforcement in Haddington and East Lothian. Trusted local heritage masons.",
    heading: "Structural Stone Repair in Haddington & East Lothian",
    subheading: "Sympathetic Helibar Stabilization for East Lothian Conservation Homes",
    intro: "Haddington and East Lothian's conservation towns feature classic red sandstone properties and traditional lime-built cottages. Exposure to rural weathering and age-related shifting frequently causes prominent cracking across sandstone headers, bays, and corner quoin stones.",
    context: "To ensure these repairs comply with strict local conservation expectations, our team integrates high-precision Helibar stitching with authentic lime-based pointing. We meticulously color-match the mortar to Haddington's traditional red and grey sandstones, keeping the structural reinforcement completely invisible. Working via abseil, we preserve the neatness of your cottage garden, leaving no footprints or heavy machinery traces behind.",
    features: [
      "Specialist red sandstone color-matching and lime repointing",
      "Highly sympathetic conservation-area compliant methods",
      "No scaffolding to damage manicured gardens and lawns",
      "Fully insured, expert local heritage technicians"
    ],
    lat: 55.9555,
    lng: -2.7788,
    postalCode: "EH41 3DL"
  }
};
