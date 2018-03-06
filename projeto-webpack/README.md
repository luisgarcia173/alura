# README #
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset.

### Capítulo 1 ###
* O papel do webpack
* Instalação através do npm
* Configuração do webpack.config.js
* Como executar webpack através de um npm script
* O conceito de entry e output
* O papel de um loader
* Instalação e configuração de um loader

### Capítulo 2 ###
* O efeito do parâmetro -p para o build de produção.
* A incompatibilidade do uglify com código que não sejam escritos em ECMASCRIPT 5.
* babili como plugin que ajuda no processo de minificação.
* pegadinhas na atribuição de variáveis de ambiente.
* o módulos cross-env para garantir compatibilidade do nosso npm script entre diferentes sistemas operacionais.

### Capítulo 3 ###
* O papel do Webpack Dev Server e suas vantagens como live reloading
* Como instalar o Webpack Dev Server através do npm
* A criação de um script para executar o servidor
* A importância da propriedade publicPath.

### Capítulo 4 ###
* Como utilizar o npm para gerenciar nossas dependências frontend
* Como o Webpack lida com as dependências em node_modules adicionado-as no bundle da aplicação.
* O papel de loaders
* Que o padrão é adicionar no bundle scripts e CSS's
* Que podemos separar CSS's do bundle criado e importá-los através da tag link através do módulo extract-text-webpack-plugin.
* A utilizar o plugin optimize-css-assets-webpack-plugin para minificar CSS's importados se adicionados no style.css.

### Capítulo 5 ###
* Que o Webpack importa scripts através da instrução import sem muito mistério.
* A necessidade de utilizar o webpack.ProvidePlugin.

### Capítulo 6 ###
* Otimização com scope hoisting
* Separação do nosso código das bibliotecas com o CommonsChunkPlugin
* Geração de index.html automaticamente com todos os artefatos produzidos pelo Webpack já importados.
* Code splitting e Lazy loading.
* Sobre utilizar System.import() ou import no carregamento de módulos.
* Onde ficam os arquivos para distribuição do projeto
* Como alterar o endereço da API no build de produção com o DefinePlugin.