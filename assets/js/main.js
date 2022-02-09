let age = document.getElementById('input-age');
let out = document.getElementById('out');

function adult() {
    if (age.value >= 18) {
        console.log(true);
        out.innerHTML = `
      <h6>..u r of legal age..</h6>
    `
    } else {
        console.log(false);
        out.innerHTML = `
      <h6>..underaged, sorry..</h6>
    `
    }
}