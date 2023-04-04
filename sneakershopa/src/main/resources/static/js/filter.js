const chooseFilter = (array, element) => {
    element.classList.add("active");
    for (let i = 0;i < array.length;i++) {
        if (array[i] !== element) {
            array[i].classList.remove("active");
        }
    }
    window.history.replaceState(null, null, "?type" + element.id);
    element.onclick = function(){removeFilter(array, element)};
}  

const removeFilter = (array, element) => {
    element.classList.remove("active");
    element.onclick = function(){chooseFilter(array, element)};
}

const sortBy = (element) => {
    document.querySelector("#sort").innerHTML = element.innerHTML;
    console.log(document.querySelector("#sort").innerHTML);
    console.log(element.innerHTML);
}  


const casual = document.querySelector("#casual");
const sport = document.querySelector("#sport");
const low = document.querySelector("#low");
const high = document.querySelector("#high");

const array = [casual, sport, low, high];

casual.onclick = function(){chooseFilter(array, casual)};
sport.onclick = function(){chooseFilter(array, sport)};
low.onclick = function(){chooseFilter(array, low)};
high.onclick = function(){chooseFilter(array, high)};


const ascending = document.querySelector("#ascending")
const descending = document.querySelector("#descending")

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);


if (urlParams.get('sortDir') === "desc") {
    sortBy(descending);
    console.log('убывание');
}
if (urlParams.get('sortDir') === "asc") {
    sortBy(ascending);
    console.log('возрастание');
}
