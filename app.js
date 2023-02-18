const delayedColorChange = (color) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color; 
            resolve(); 
        }, 2000)
    })
}

const rgb_values = [

]; 

async function rainbow() {
    

    await delayedColorChange('#3a015c', 1000); 
    await delayedColorChange('#32004f', 1000); 
    await delayedColorChange('#220135', 1000); 
    await delayedColorChange('#190028', 1000); 
    await delayedColorChange('#11001c', 1000); 
    await delayedColorChange('#190028', 1000); 
    await delayedColorChange('#220135', 1000); 
    await delayedColorChange('#32004f', 1000); 
    await delayedColorChange('#3a015c', 1000); 
    rainbow(); 
}

rainbow(); 
