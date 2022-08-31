let portfel = document.getElementsByName('portfel'),
    contract = document.getElementsByName('contract'),
    button = document.querySelectorAll('.pay-form-btn'),
    textField = document.querySelectorAll('.pay-form-input');
 

button.forEach((btn) => {
    contract.forEach((sel) => {
        sel.addEventListener('change', function (){
            let contractNum = sel.selectedIndex;
            portfel.forEach((sel) => {
                sel.addEventListener('change', function (){
                    let portfelNum = sel.selectedIndex;
                    textField.forEach((field) => {
                        field.addEventListener('keyup', function () {
                            if (portfelNum > 0 && contractNum > 0 && field.value > 0) {
                                btn.style.backgroundColor = 'rgb(56, 120, 70)'
                            } else {
                                btn.style.backgroundColor = 'rgb(56, 120, 70, 0.5)'
                            }
                        });
                    })
                });
            })
        });
    })
})



// portfel.forEach((sel) => {
//     sel.addEventListener('change', function (){
//         portfelNum = sel.selectedIndex;
//         if (portfelNum > 0) {
//             button[2].style.backgroundColor = 'rgb(56, 120, 70)'
//         }
//     });
// })


// function CheckForm() {

//     contract.forEach((sel) => {
//         sel.addEventListener('change', function (){
//             let contractNum = sel.selectedIndex;
//             if (contractNum > 0) {
//                 button[2].style.backgroundColor = 'rgb(56, 120, 70)'
//             }
//         });
//       })

//     let portfelNum = 0;
//     portfel.forEach((sel) => {
//         sel.addEventListener('change', function (){
//             portfelNum = sel.selectedIndex;
//             if (portfelNum > 0) {
//                 button[2].style.backgroundColor = 'rgb(56, 120, 70)'
//             }
//         });
//       })
      


//     for (let i = 0; i < button.length; i++) {
//         for (let i = 0; i < textField.length; i++) {
//             textField[i].addEventListener('keyup', function () {
//                 if (textField[i].value > 0) {
//                     button[i].style.backgroundColor = 'rgb(56, 120, 70)'
//                 } else {
//                     button[i].style.backgroundColor = 'rgb(56, 120, 70, 0.5)'
//                 }
//             }   );
//         }
//     }
    
// }




// CheckForm()