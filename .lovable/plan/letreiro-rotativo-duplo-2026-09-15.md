# Letreiro rotativo duplo

## O que será feito
- Criar um componente React de duas fitas encostadas, com estética de lambe-lambe.
- Inserir o componente imediatamente abaixo da seção de abertura e antes de “Mandato em números”.
- Repetir “PROFESSORA NARA • DEPUTADA ESTADUAL • 18018 •” em tipografia Saira grande, pesada e maiúscula.
- Usar a fita superior rosa movendo para a esquerda e a inferior mostarda movendo para a direita, ambas no mesmo ritmo.
- Pausar as duas animações quando o ponteiro estiver sobre qualquer parte do bloco.
- Manter as duas fitas estáticas quando a pessoa tiver preferência por movimento reduzido.

## Detalhes técnicos
- Usar `motion/react`, já presente no projeto, com duas cópias idênticas da sequência para formar um ciclo contínuo sem saltos.
- Controlar a pausa do conjunto pelo estado de interação do contêiner, sem alterar outras animações da página.
- Usar os tokens globais da campanha para rosa, mostarda, marfim e grafite.
- Preservar acessibilidade escondendo cópias repetidas dos leitores de tela e expondo a frase apenas uma vez.
- Confirmar o resultado em computador e celular, incluindo movimento reduzido e ausência de erros.
