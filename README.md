# e3-admission-test

O teste de admissão foi bem tranquilo, gostei de trabalhar nele.
O prazo de 7 dias foi justo para a demanda, eu que nessa semana especificamente não tive como ficar full-time me dedicando apenas a esse teste.
No geral foi uma experiência muito boa!

Observação: irei atualizar o git e o arquivo .gitignore para remover as pastas de builds de android/ios, que acabaram subindo junto, mas devido ao prazo, deixei passar. 

Sobre o teste em si:

## Camada mobile

Faltou alguns ajustes:
- Organizar e limpar o código de uma maneira geral, dava para substituir algumas funçoes, repetidas, remover coisas desnecessarias, trocar thens por awaits....
- Ordenação por preço e/ou descrição do produto (Sei que deveria colocar um sort no data - linha 103 do productlist.js - ) faltou apenas definir a melhor maneira para isso
- Ajustar layout/CSS/design geral do projeto, tenho ideia de como fazer, apenas não tive tempo de executar
- Testes unitarios/E2E <- Cheguei a iniciar isso mas não executei testes dos testes (que ironico) para verificar o estado de funcionamento;

## Camada backend

- Iniciei o desenvolvimento, crie as entidades de produto, price e estoque.
- Faltou continuar o desenvolvimento do productBussines.ts para dar continuidade a união das entidades