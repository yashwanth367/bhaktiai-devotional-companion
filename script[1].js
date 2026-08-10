const answers = [
  {keys:["gita","bhagavad"], text:"The Bhagavad Gita is a dialogue between Arjuna and Krishna about duty, action, wisdom and inner balance. A simple takeaway is: do your responsibilities sincerely while learning not to be controlled by the result."},
  {keys:["krishna","story"], text:"One well-known Krishna story is about his childhood in Vrindavan, where his playful nature and compassion brought people together. These stories are often used to explore devotion, love, courage and humility."},
  {keys:["diwali","festival"], text:"Diwali is widely celebrated as a festival of light. Different regions connect it with different traditions, including the return of Rama to Ayodhya, Lakshmi worship and other local stories. At its heart, it is associated with light, renewal and hope."},
  {keys:["temple","visit"], text:"Temples can serve as spaces for prayer, community, art, music and cultural learning. Visiting a temple can be a personal spiritual practice, while temple traditions also preserve generations of Indian cultural knowledge."},
  {keys:["prayer","mantra"], text:"A mantra is a sacred sound, word or phrase used in many Indian spiritual traditions. Repetition can support concentration and reflection. The meaning and practice can vary across traditions, so learning from an authentic source is important."}
];

function scrollToSection(id){document.getElementById(id).scrollIntoView({behavior:"smooth"})}
function askTopic(q){document.getElementById("question").value=q;scrollToSection("ask");setTimeout(sendQuestion,350)}
function addMessage(text,who){const m=document.createElement("div");m.className="msg "+who;m.textContent=text;document.getElementById("messages").appendChild(m);document.getElementById("messages").scrollTop=99999}
function answerFor(q){
  const s=q.toLowerCase();
  for(const a of answers) if(a.keys.some(k=>s.includes(k))) return a.text;
  return "That’s a thoughtful question 🙏. BhaktiAI would answer this using a curated devotional knowledge base and retrieval (RAG), then explain the relevant source in simple language. For this demo, try asking about the Bhagavad Gita, Krishna, Diwali, temples, prayers or mantras.";
}
function sendQuestion(){
  const input=document.getElementById("question"); const q=input.value.trim(); if(!q)return;
  addMessage(q,"user"); input.value="";
  setTimeout(()=>addMessage(answerFor(q),"bot"),450);
}
const thoughts=[
"“When the mind becomes calm, wisdom becomes clear.”",
"“Let knowledge guide your action, and let compassion guide your knowledge.”",
"“A small act of kindness can become a daily form of devotion.”",
"“Tradition becomes meaningful when we understand the values behind it.”"
];
function newThought(){
  const t=thoughts[Math.floor(Math.random()*thoughts.length)];
  document.getElementById("thought").textContent=t;
  document.getElementById("dailyText").textContent=t;
}
