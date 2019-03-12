function solve(){
  let input = JSON.parse(document.getElementById("arr").value);
  let resultElement = document.getElementById("result");

  let counters = {
    "BulgarianArmy": 0,
    "CivilProtection": 0,
    "Diplomatic": 0, 
    "Foreigners": 0,
    "Transient": 0,
    "Sofia": 0,
    "Province": 0,
    "Other": 0
  };
  let BAPattern = (/^BA \d{3} \d{3}$/);
  let CPPattern = (/^CP \d{2} \d{3}$/);
  let DPattern = (/^[C][T]* \d{4}$/);
  let FPattern = (/^XX \d{4}$/);
  let TPattern = (/^\d{3} \w \d{3}$/);
  let SPattern = (/^C[AB]* \d{4} \w{1,2}$/);
  let PPattern = (/^\w{1,2} \d{4} \w{1,2}$/);

  for (const item of input) {
      if (BAPattern.test(item)) {
        counters.BulgarianArmy ++;
      } else if(CPPattern.test(item)){
        counters.CivilProtection++;
      } else if(DPattern.test(item)){
        counters.Diplomatic++;
      } else if(FPattern.test(item)){
        counters.Foreigners++;
      } else if(TPattern.test(item)){
        counters.Transient++;
      } else if(SPattern.test(item)){
        counters.Sofia++;
      } else if(PPattern.test(item)){
        counters.Province++;
      } else{
        counters.Other++;
      }
  }

  let sortedCounters = {};
  Object.keys(counters)
    .sort((a,b) => { return counters[b] - counters[a];})
    .sort((a,b) => a-b)
    .map(value => sortedCounters[value] = counters[value]);

  Object.keys(sortedCounters).forEach(function(key) {
    let pElement = document.createElement("p");
    pElement.textContent = `${key} -> ${sortedCounters[key]}`;
    resultElement.appendChild(pElement);
  });
}