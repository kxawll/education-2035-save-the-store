export const stages = [
  {id:'case', n:'01', title:'CASE', label:'The brief'},
  {id:'discussion', n:'02', title:'HUMAN DISCUSSION', label:'Think first'},
  {id:'analysis', n:'03', title:'AI ANALYSIS', label:'Challenge'},
  {id:'critical', n:'04', title:'CRITICAL THINKING', label:'Evaluate'},
  {id:'simulation', n:'05', title:'VR SIMULATION', label:'Test it'},
  {id:'consequences', n:'06', title:'CONSEQUENCES', label:'What changed'},
  {id:'decision', n:'07', title:'NEW DECISION', label:'Decide again'},
  {id:'outcome', n:'08', title:'OUTCOME', label:'Choose & reflect'}
];
export const caseData = {
  title:'SAVE THE STORE',
  brief:'A city supermarket is losing customers and sales. Your team acts as retail marketing consultants. Explore the evidence, diagnose the problem and prepare for your first discussion.',
  objective:'Redesign the customer experience of the supermarket to increase sales and customer satisfaction without exceeding the budget.',
  metrics:[['SALES','−14%','over the past 6 months'],['AVERAGE BASKET','−9%','has declined'],['PEAK QUEUE','8–12 min','at peak hours'],['BUDGET','€30,000','maximum change budget']],
  examples:{
    firstDecision:['Add 3 self-checkouts and keep 2 traditional checkouts.','Move ready-to-eat closer to the entrance.','Remove promotional stands from narrow aisles.','Create an express-zone and update store navigation.','Redistribute shopper flow by time; for example, a morning discount for pensioners.'],
    revisedDecisions:['Move from 3 self-checkouts + 2 traditional checkouts to 4 self-checkouts + 3 traditional checkouts + temporary express checkout at peak hours.','If ready-to-eat is moved near the entrance, add a separate fast lane and clearer exit flow after the simulation reveals a bottleneck.']
  },
  evidence:[
    {id:'situation',title:'STORE SITUATION',tag:'OPERATIONS',body:['Sales have fallen by 14% over the past six months; average basket has fallen by 9%.','At peak hours, queues take 8–12 minutes.','Shoppers report difficulty finding products.','The ready-to-eat area is overloaded at lunchtime.','Promotional stands obstruct customer movement.']},
    {id:'feedback',title:'CUSTOMER FEEDBACK',tag:'SHOPPER NEEDS',facts:[['Finding products','Shoppers report that it is difficult to find the items they need.'],['Queue experience','Queues last 8–12 minutes during peak hours.'],['Checkout preferences','Young shoppers want self-checkout; older shoppers prefer traditional tills.'],['Lunch-time visit','The ready-to-eat area becomes overloaded at lunchtime.']]},
    {id:'segments',title:'CUSTOMER SEGMENTS',tag:'FOUR SHOPPER NEEDS',segments:[['Young professional','Makes a quick trip for ready-to-eat food and a drink, then wants to use self-checkout.'],['Family shopper','Does a larger shop, visits many departments and more often uses a traditional checkout.'],['Older customer','Looks for familiar products, clear navigation and a staffed checkout.'],['Lunch-time customer','Visits for ready-to-eat food during the lunchtime rush.']]},
    {id:'constraints',title:'CONSTRAINTS',tag:'DESIGN WITHIN LIMITS',body:['Change budget: €30,000.','The store area cannot be expanded.','Staff cannot be increased significantly.','Any solution must work within the existing store.']},
    {id:'prices',title:'PRICE LIST',tag:'INDICATIVE CASE RANGES',price:true}
  ]
};
// Indicative pilot-case ranges. Teams still enter their own chosen estimate.
export const priceList = [
  {id:'selfCheckout',name:'Add self-checkout',detail:'Equipment and installation',guide:'€5,000–€6,000 per unit',qty:true},
  {id:'readyEntrance',name:'Move ready-to-eat near the entrance',detail:'Layout change',guide:'€500–€2,000 for rearranging shelves / zones'},
  {id:'removePromo',name:'Remove promotional stands from narrow aisles',detail:'Customer-flow change',guide:'€500–€2,000 for rearranging shelves / zones'},
  {id:'express',name:'Create an express-zone',detail:'Quick-trip route',guide:'€500–€2,000 for rearranging shelves / zones'},
  {id:'navigation',name:'Update store navigation',detail:'Category signs',guide:'€1,500–€3,000'},
  {id:'flexCheckout',name:'Introduce flexible checkout at peak hours',detail:'Checkout operations',guide:'COST NOT PROVIDED IN CASE — ENTER TEAM ESTIMATE'},
  {id:'lunchFlow',name:'Separate the lunch-time ready-to-eat flow',detail:'Customer-flow change',guide:'€500–€2,000 for rearranging shelves / zones'},
  {id:'promoZone',name:'Create smaller, better-placed promo zones',detail:'Promotional layout',guide:'€300–€1,000 per compact promo point'},
  {id:'timeFlow',name:'Redistribute shopper flow by time of day',detail:'For example, a morning offer for pensioners',guide:'COST NOT PROVIDED IN CASE — ENTER TEAM ESTIMATE'},
  {id:'staffTraining',name:'Train staff for the revised customer flow',detail:'Staff training',guide:'€500–€1,500'},
  {id:'other',name:'Other intervention',detail:'Add a team estimate',guide:'COST NOT PROVIDED IN CASE — ENTER TEAM ESTIMATE',custom:true}
];
export const discussionQuestions = [
  ['problem','What is the main problem of the store?'],
  ['priority','Which customer group should be prioritized and why?'],
  ['sales','What affects the sales decline the most?'],
  ['budget','What can realistically be changed within €30,000?'],
  ['space','Does the physical space allow these changes?'],
  ['tradeoff','Could a decision make the experience worse for another customer group?'],
  ['timing','Could the store redistribute customer flow across different times? For example, what might a morning offer change?']
];
export const personas = [
  {id:'young',name:'YOUNG PROFESSIONAL',note:'Ready-to-eat + drink · self-checkout'},
  {id:'family',name:'FAMILY SHOPPER',note:'Large shop · traditional checkout'},
  {id:'older',name:'OLDER CUSTOMER',note:'Familiar products · staffed till'},
  {id:'lunch',name:'LUNCH-TIME CUSTOMER',note:'Ready-to-eat · midday rush'}
];
export const unexpectedEvents = [
  {title:'FRIDAY, 18:30',text:'Customer traffic is 35% higher than usual. Two self-checkout machines stop working.'},
  {title:'A NEW COMPETITOR',text:'A competitor nearby launches a discount campaign.'},
  {title:'CUSTOMER COMPLAINTS',text:'Customers complain that the new layout makes basic products harder to find.'}
];
