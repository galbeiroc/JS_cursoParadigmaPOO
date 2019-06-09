let contador = (() => {
    let _contador = 1;

    function incrementar () {
        return _contador++;
    }

    function decrementar () {
        return _contador--;
    }

    function valor () {
        return _contador;
    }

    return {
        increment: incrementar,
        decrement: decrementar,
        val: valor
    };
})();

console.log(contador.val());
console.log(contador.increment());
console.log(contador.increment());

