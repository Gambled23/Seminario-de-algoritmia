function obtenerDatos() {
    let entrada1 = document.getElementById('entrada1').value
    let entrada2 = document.getElementById('entrada2').value
    let entrada3 = document.getElementById('entrada3').value
    let entrada4 = document.getElementById('entrada4').value
    let entrada5 = document.getElementById('entrada5').value
    let entrada6 = document.getElementById('entrada6').value
    let entrada7 = document.getElementById('entrada7').value
    let entrada8 = document.getElementById('entrada8').value
    let entrada9 = document.getElementById('entrada9').value
    var arregloInputs = [entrada1, entrada2, entrada3, entrada4, entrada5, entrada6, entrada7, entrada8, entrada9]
    return arregloInputs
}

function escribirResultado(arregloInputs) {
    var salida1 = document.getElementById("salida1");
    var salida2 = document.getElementById("salida2");
    var salida3 = document.getElementById("salida3");
    var salida4 = document.getElementById("salida4");
    var salida5 = document.getElementById("salida5");
    var salida6 = document.getElementById("salida6");
    var salida7 = document.getElementById("salida7");
    var salida8 = document.getElementById("salida8");
    var salida9 = document.getElementById("salida9");
    salida1.value = arregloInputs[0];
    salida2.value = arregloInputs[1];
    salida3.value = arregloInputs[2];
    salida4.value = arregloInputs[3];
    salida5.value = arregloInputs[4];
    salida6.value = arregloInputs[5];
    salida7.value = arregloInputs[6];
    salida8.value = arregloInputs[7];
    salida9.value = arregloInputs[8];
}

function bubbleSort(reversa = false) {
    arregloInputs = obtenerDatos()
    const len = arregloInputs.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            let a = arregloInputs[i];
            let b = arregloInputs[j];
            if (reversa ? a < b : a > b) {
                const tmp = arregloInputs[j];
                arregloInputs[j] = arregloInputs[i];
                arregloInputs[i] = tmp;
            }
        }
    }
    escribirResultado(arregloInputs)
}

function merge(left, right) {
    let arr = []
    // Salir del bucle si alguno de los arreglos queda vacío
    while (left.length && right.length) {
        // Elegir el elemento menor entre los elementos más pequeños de
        // los subarreglos

        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }

    // Concatenar los elementos sobrantes
    // (en caso de que no hayamos pasado por todo el arreglo, izquierdo o derecho)
    return [...arr, ...left, ...right]
}

function mergeSort(array) {
    var half = array.length / 2

    // ¿Terminar?
    if (array.length < 2) {
        return array
    }

    var left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}

function mergeSortInicio() {
    array = obtenerDatos()
    arregloInputs = mergeSort(array)
    escribirResultado(arregloInputs)
}

function partition(arr, start, end){
    // Tomando el último elemento como Pivote
    const pivotValue = arr[end];
    let pivotIndex = start; 
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
        // Intercambiando elementos
        [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        // Moviéndose al siguiente elemento
        pivotIndex++;
        }
    }
    
    // Poniendo enmedio el valor del Pivote
    [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]] 
    return pivotIndex;
};

function quickSortIterative(arr) {
    // Creando un arreglo que usaremos como una pila,
    // usando los métodos push() y pop()
    stack = [];
    
    // Agregando todo el arreglo inicial como un "subarreglo sin ordenar"
    stack.push(0);
    stack.push(arr.length - 1);
    
    // El bucle se repite mientras tengamos subarreglos sin ordenar
    while(stack[stack.length - 1] >= 0){
        
        // Extrayendo el subarreglo sin ordenar superior
        end = stack.pop();
        start = stack.pop();
        
        pivotIndex = partition(arr, start, end);
        
        // Si hay elementos sin ordenar a la izquierda del pivote,
        // Añadimos dicho subarreglo a la pila para que podamos ordenarlo luego
        if (pivotIndex - 1 > start){
            stack.push(start);
            stack.push(pivotIndex - 1);
        }
        
        // Si hay elementos sin ordenar a la derecha del pivote,
        // Añadimos dicho subarreglo a la pila para que podamos ordenarlo luego
        if (pivotIndex + 1 < end){
            stack.push(pivotIndex + 1);
            stack.push(end);
        }
    }
    return stack
}

function sortIterativo() {
    arr = obtenerDatos()
    arregloInputs = quickSortIterative(arr)
    escribirResultado(arr)
}

function quickSortRecursive(arr, start, end) {
    // ¿Ha llegado al fin?
    if (start >= end) {
        return;
    }
    
    // Devuelve el índice del Pivote
    let index = partition(arr, start, end);
    
    // Recursivamente aplica la misma lógica a los arreglos izquierdo y derecho
    quickSortRecursive(arr, start, index - 1);
    quickSortRecursive(arr, index + 1, end);
}

function sortRecursivo() {
    arr = obtenerDatos()
    quickSortRecursive(arr, 0, arr.length - 1);
    escribirResultado(arr)
}