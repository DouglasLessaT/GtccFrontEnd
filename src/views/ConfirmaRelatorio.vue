<template>
    <body>
     <div class="container">    
         <div class="workspace">
           <div class="head">CADASTRO DA BANCA
               <button class="btn-action">+</button>
           </div>
             
           <aside class="data-space">
                <h2>Alunos</h2>
                <span class="data">
                    Aluno 1
                </span>
                <span class="data">
                    Aluno 2
                </span>
                <span class="data">
                    Aluno 3
                </span>
            </aside>
                <aside class="data-space">
                    <h2>Tema do TCC</h2>
                    <span class="data">
                        Titulo
                    </span>
                    <span class="data">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum nisi vitae mi euismod, a venenatis diam blandit. Vestibulum at congue nulla, eu pharetra ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam a mi vitae tellus tristique elementum vitae euismod enim. Sed non auctor orci. Curabitur condimentum sapien sem, sed volutpat orci gravida in. Maecenas scelerisque feugiat lacus, ut ultrices enim. Vestibulum vitae ipsum sollicitudin, sagittis metus non, sollicitudin magna. 
                    </span>
                </aside>
                    <aside class="data-space">
                        <h2>Banca</h2>
                        <span class="data">
                            Professor 1
                        </span>
                        <span class="data">
                            Professor 2
                        </span>
                        <span class="data">
                            Professor 3
                        </span>
                        <span class="data">
                            Professor 4
                        </span>
                    </aside>

       </div> 
     </div>
    </body>
   </template>
   
   <script>
       export default {
        name: 'ConfirmaRelatorio'
       };
   </script>
   
   <style scoped>
   /* Layout da tela de Relatório */
    h2{
        color: #09a6a3;
    }

   .data-space{
    width: 608px;
    display: grid;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
   }
   .data{
    background-color: #09a6a304;
    border: #09a6a38e solid 1px;
    width: 500px;
    padding: 10px;
    margin: 10px;
   }

   </style>