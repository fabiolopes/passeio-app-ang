# Passeio App

Uma aplicação Angular desenvolvida para gerenciamento de passeios e atividades turísticas.

## Sobre a Aplicação

O Passeio App é uma aplicação web construída com Angular que permite aos usuários explorar, visualizar e gerenciar passeios turísticos. A aplicação foi desenvolvida seguindo as melhores práticas do Angular, com foco na modularização e organização do código.

## Funcionalidades Implementadas

- 🗺️ Visualização de passeios disponíveis
- 📱 Interface responsiva e intuitiva
- 🔍 Sistema de busca e filtros
- 📋 Gerenciamento de reservas
- 👤 Área do usuário

## Arquitetura Modular

Este projeto foi estruturado seguindo o conceito de **módulos do Angular**, proporcionando:

### Organização por Módulos

- **Core Module**: Contém serviços singleton e funcionalidades essenciais da aplicação
- **Shared Module**: Componentes, diretivas e pipes reutilizáveis em toda a aplicação
- **Feature Modules**: Módulos específicos para cada funcionalidade principal:
  - `PasseiosModule`: Gerenciamento de passeios
  - `UsuarioModule`: Funcionalidades do usuário
  - `ReservasModule`: Sistema de reservas

### Benefícios da Modularização Aplicada

1. **Lazy Loading**: Módulos carregados sob demanda, melhorando a performance
2. **Separação de Responsabilidades**: Cada módulo tem uma responsabilidade específica
3. **Reutilização de Código**: Componentes compartilhados através do SharedModule
4. **Manutenibilidade**: Código organizado e fácil de manter
5. **Escalabilidade**: Facilita a adição de novas funcionalidades

### Estrutura de Módulos

```
src/
├── app/
│   ├── core/                 # Módulo principal (singleton)
│   │   ├── services/
│   │   └── core.module.ts
│   ├── shared/               # Módulo compartilhado
│   │   ├── components/
│   │   ├── pipes/
│   │   └── shared.module.ts
│   ├── features/             # Módulos de funcionalidades
│   │   ├── passeios/
│   │   ├── usuario/
│   │   └── reservas/
│   └── app.module.ts         # Módulo raiz
```

## Tecnologias Utilizadas

- **Angular**: Framework principal
- **TypeScript**: Linguagem de programação
- **Angular CLI**: Ferramenta de desenvolvimento
- **RxJS**: Programação reativa
- **Angular Material**: Biblioteca de componentes UI

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/fabiolopes/passeio-app-ang.git
```

2. Instale as dependências:
```bash
npm install
```

3. Execute a aplicação:
```bash
ng serve
```

4. Acesse `http://localhost:4200` no seu navegador

## Scripts Disponíveis

- `ng serve`: Executa a aplicação em modo de desenvolvimento
- `ng build`: Compila a aplicação para produção
- `ng test`: Executa os testes unitários
- `ng lint`: Verifica a qualidade do código

## Contribuição

Para contribuir com o projeto:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.