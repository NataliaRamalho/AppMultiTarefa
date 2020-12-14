
# AppMultiTarefa
Aplicação realizada para um processo seletivo.
Link para acessar o App: https://appmultitarefa.web.app/cadastro

Índice
=================
<!--ts-->
   * [Funcionalidades](#funcionalidades)
   * [Tecnologias utilizadas](#tecnologias-utilizadas)
   * [Telas e explicação de como usar](#telas-e-explicação-de-como-usar)
   * [Como executar o código](#como-executar-o-código)
<!--te-->

#  Funcionalidades 
<li> Cadastro via Facebook ou e-mail. </li>
<li> Login na aplicação. </li>
<li> Logout da aplicação. </li>
<li> Criar lista de compra, podendo adicionar, remover e marcar itens. </li>
<li> Consulta do valor do real.</li>
<li> Consulta a previsão do tempo a partir do CEP. </li>
<li> Exclusão da conta.</li>

# Tecnologias utilizadas
<li> Ionic </li>
<li> Angular </li>
<li> TypeScript </li>
<li> Firebase </li>

# Telas e explicação de como usar
<h2> Cadastro e Login (Home)</h2>

<img src="https://github.com/NataliaRamalho/AppMultiTarefa/blob/master/telas/telaHome.png" >



<p> Tela na qual, o usuário pode realizar seu cadastro e login, tanto pelo Facebook como pelo e-mail. <br>
 O cadastro é realizado, quando o usuário digita seu e-mail e senha nos respectivos campos e clica no botão "cadastrar".<br>
 Já o login, é feito também  ao digitar e-mail e senha em seus respectivos campos e depois clicar no botão "login".<br>
 Por fim, o login pelo facebook é realizado ao clicar no botão "login com facebook." </p>

<hr>

<h2> Consulta do clima</h2>
<img src="https://github.com/NataliaRamalho/AppMultiTarefa/blob/master/telas/telaConsultaClima.png">
<p> Nesta tela é possível consultar o tempo a partir do CEP.<br>
    A consulta do tempo é realizada colocando no campo de texto o CEP e depois apertando o botão "buscar clima".
</p>

<hr>

<h2> Lista de Compras </h2>
<img src="https://github.com/NataliaRamalho/AppMultiTarefa/blob/master/telas/telaListaCompra.png">


<p> Nesta funcionalidade o usuário tem a possibilidade de adicionar, excluir e marcar itens de uma lista.<br>
    Para adicionar itens na lista, deve-se digitar no "label" o nome do item que será adicionado e posteriormente clicar no botão "adicionar".<br>
    Já para marcar os itens, basta clicar no "checkbox" que se encontra antes de cada item da lista.<br>
    Exclui-se um item da lista, ao clicar no icone da lixeira, o qual se encontra na frente de cada item e confirmar a exclusão.
    Por fim para excluir toda a lista, deve-se clicar no botão "excluir lista".
</p>

<hr>

<h2> Consulta do valor do real</h2>
<img src="https://github.com/NataliaRamalho/AppMultiTarefa/blob/master/telas/TelaValorReal.png">
<p> Com essa funcionalidade pode-se consultar o valor do real de acordo com alguns países.<br>
  Para utilizar esta funcionalidade não é necessário executar nenhuma ação, basta acessar a tela desta aplicação pelo menu lateral.   
</p>
<hr>
<p><strong> OBS: </strong> Para acessar qualquer uma das telas basta clicar no nome da tela no menu ao lado. </p>
<p><strong> OBS': </strong> Para sair ou excluir conta basta clicar nos botões do menu ao lado. </p>
<p><strong> OBS'': </strong> O acesso as funcionalidades do sistema é possível, só após a realização do cadastro ou login. </p>
  

# Como executar o código 
<h1> Pré-requisitos </h1>
<li> Node.js </li>
<li> Pacote npm </li>
<li> Pacote do Ionic </li>
<li> Angular </li>
<li> Firebase</li>
<li> axios </li>
<li> Editor de código (VS-Code) </li>
<h1> Rodando o código  </h1>
<li>Clone este repositório</li>
  <p>Digite o comando a abaixo no seu terminal </p>
  
 ```sh
git clone https://github.com/NataliaRamalho/AppMultiTarefa.git
```


<h1> Passos </h1>
<li> Verifique se possui o node.js, npm e Ionic instalado</li>
  <p>No terminal digite os comando abaixo e após cada comando aperte enter.</p>
  
  
  ```sh
node --version

npm --version

ionic --version
```

  <p> Caso não tenha, baixe o <a href="https://nodejs.org/en/">node.js</a> que virá com o pacote npm, se quiser pode baixar também o 
  <a href="https://code.visualstudio.com/"> VSCode </a> <br>. Para instalar o ionic basta rodar o comando abaixo, no terminal, lembrando que antes deve-se instalar o node.js e o npm. </p>
  
  
  
   ```sh
npm install -g ionic
```
  
  
 <li> Abrir o projeto </li>
<p> Se estiver usando o VSCode no terminal digite o comando abaixo. Caso não esteja abra o projeto em seu editor de código </p>


  ```sh
code .
```


<li> Instalando dependências </li>
  <p> Com o projeto aberto digite no terminal</p>
  
   ```sh
npm install
```


<li>Verificando se possui o Firebase instalado</li>
  <p> Para verificar, digite no terminal o comando abaixo.</p>
  
  
  ```sh
firebase --version
```


<p> Caso não tenha instalado, basta digitar no terminal: </p>


```sh
npm install -g firebase-tools
```


<li> Criar conta no firebase </li>
<p> Entre no site do <a href="https://console.firebase.google.com">firebese</a>.
  Depois crie um conta, em seguida um projeto. Por fim, ative as funcionalidades de cloundFireStore e autenticação para e-mail e senha</p>.

<li> Criar conta no Facebook developers</li>
<p>Entre no site do <a href="https://developers.facebook.com/">facebook developers</a> e crie uma conta. Depois crie um aplicativo. Por fim utilize os dados, deste aplicativo no firebase na parte de autenticação com o facebook.<br>
<strong> obs: </strong> Esse passo é nescessário para que seja configurado a autenticação com o facebook.</strong></p>
  
<li> Criar conta em API do clima</li>
<p> Crie uma conta no site <a href="https://openweathermap.org/"> OpeanWeather</a> e gere uma chave de acesso. </b>
<strong> obs: </strong> Esse passo é necessário para utilizar a funcionalidade de consultar o clima.</p>

<li> Substituir dados</li>
<p> Abra o arquivo _firebaseConfig.ts que se encontra dentro do "src/app" e coloque os dados da conta do seu projeto criado no firebase. Depois altere o nome do arquivo para firebaseConfig </p>
<p> Abra o arquivo _keyApi que se encontra dentro do "src/app" e substituo por sua chave de acesso gerada no passo anterior. Por fim  altere o nome do arquivo para keyAPI.ts </p>

<li>Rodando o código</li>
<p> Após realizar todos os passos, digite o seguinte comando no terminal: </p>

```sh
ionic serve
```





  
  
 


  
  
 
