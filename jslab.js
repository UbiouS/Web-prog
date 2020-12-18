function rndArray(length) {
    const array = [];
    for (var i = 0; i < length; i++)
        array.push(Math.floor(Math.random() * 2000) - 1000)
    return array
}

function arrayMax(array) {
    let max = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max
}

function arrayMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    // var max = Math.min(array)
    return min
}

function arrayMedian(array) {
    array.sort()
    var half = Math.floor(array.length / 2);
    if (array.length % 2) {
        return array[half];
    } else {
        return (array[half] + array[half] + 1) / 2.0;
    }
}

function qs(array) {
    if (array.length < 2) return array;
    let pivot = array[0];
    const left = [];
    const right = [];
    for (let i = 1; i < array.length; i++) {
        if (pivot > array[i]) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }
    return qs(left).concat(pivot, qs(right));
}



function showContacts() {
    document.getElementById("popUp").style.visibility = "visible";
}

function closeContacts() {
    document.getElementById("popUp").style.visibility = "hidden";
}

let imageIndex = 1;
showSlides(imageIndex);

function plusSlides(n) {
    showSlides(imageIndex += n);
}

function currentSlide(n) {
    showSlides(imageIndex = n);
}

function showSlides(n) {
    let i;
    const images = document.getElementsByClassName("selfImage");
    const dots = document.getElementsByClassName("dot");
    if (n > images.length) imageIndex = 1
    if (n < 1) imageIndex = images.length
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    images[imageIndex - 1].style.display = "block";
    dots[imageIndex - 1].className += " active";
}

array = rndArray(1000)

console.log("Random array: ", array)
console.log("Max: ", arrayMax(array))
console.log("Min: ", arrayMin(array))
console.log("Median: ", arrayMedian(array))
console.log("Quicksort array: ", qs(array))

