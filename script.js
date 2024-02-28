const input = document.getElementById('input')

const calc = (number) => {
    input.value += number;
}
let solution = () =>
{
    try{
        input.value = eval(input.value)
    }
    catch(err)
    {
        alert('These was an error')
    }
}
let clearAll = () =>
{
    input.value = ""
}

let DeleteOneNumber = () =>
{
    input.value = input.value.slice(0, -1)
}