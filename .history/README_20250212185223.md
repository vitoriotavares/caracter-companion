# Documentação do App de Fichas de RPG Dinâmicas

## Visão Geral
O aplicativo permite a criação, gestão e compartilhamento de fichas de RPG dinâmicas, compatíveis com sistemas como *Dungeons & Dragons (D&D)*, *Pathfinder* e outros. Ele oferece suporte a personalização de atributos, habilidades, inventário, condições e status do personagem, além de permitir a gestão do grupo de jogadores.

## Funcionalidades Principais
- **Criação de Personagens**: Monte fichas para diferentes sistemas de RPG.
- **Gerenciamento de Estatísticas**: Controle atributos como Força, Destreza, Inteligência, etc.
- **Sistema de Níveis e XP**: Automatiza a progressão do personagem.
- **Registro de Equipamentos e Inventário**: Gerencie itens, armas e moedas.
- **Sistema de Descanso**: Controle curto e longo descanso.
- **Compatibilidade com Diversos Sistemas**: Personalização para diferentes regras de RPG.
- **Interface Intuitiva e Personalizável**: Ajuste o layout e tema da ficha.
- **Gerenciamento de Grupo**: Visualize status dos membros do grupo.
- **Compartilhamento e Exportação**: Gere fichas em PDF e compartilhe com amigos.

## Estrutura do Banco de Dados
### 1. Tabela `users`
Armazena os dados dos usuários do sistema.
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 2. Tabela `characters`
Armazena as fichas de personagens criadas pelos usuários.
```sql
CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name VARCHAR(100) NOT NULL,
    class VARCHAR(50),
    level INT DEFAULT 1,
    race VARCHAR(50),
    background VARCHAR(100),
    experience_points INT DEFAULT 0,
    hp_current INT,
    hp_max INT,
    armor_class INT,
    speed INT,
    inspiration BOOLEAN DEFAULT FALSE
);
```

### 3. Tabela `abilities`
Armazena os atributos dos personagens.
```sql
CREATE TABLE abilities (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES characters(id),
    strength INT,
    dexterity INT,
    constitution INT,
    intelligence INT,
    wisdom INT,
    charisma INT
);
```

### 4. Tabela `skills`
Armazena as habilidades e suas proficiências.
```sql
CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES characters(id),
    skill_name VARCHAR(50),
    proficiency BOOLEAN DEFAULT FALSE,
    bonus INT
);
```

### 5. Tabela `inventory`
Gerencia os itens e equipamentos dos personagens.
```sql
CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    character_id INT REFERENCES characters(id),
    item_name VARCHAR(100),
    quantity INT DEFAULT 1,
    description TEXT
);
```

### 6. Tabela `party`
Armazena informações sobre grupos de personagens.
```sql
CREATE TABLE party (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### 7. Tabela `party_members`
Relaciona personagens a um grupo.
```sql
CREATE TABLE party_members (
    id SERIAL PRIMARY KEY,
    party_id INT REFERENCES party(id),
    character_id INT REFERENCES characters(id)
);
```

## API Endpoints

### Autenticação
- `POST /api/register`: Registra um novo usuário.
- `POST /api/login`: Autentica um usuário e retorna um token JWT.

### Gerenciamento de Personagens
- `POST /api/characters`: Cria um novo personagem.
- `GET /api/characters/:id`: Retorna os detalhes de um personagem.
- `PUT /api/characters/:id`: Atualiza os dados de um personagem.
- `DELETE /api/characters/:id`: Remove um personagem.

### Inventário
- `POST /api/inventory/:character_id`: Adiciona um item ao inventário.
- `GET /api/inventory/:character_id`: Lista os itens do personagem.
- `DELETE /api/inventory/:id`: Remove um item do inventário.

### Gerenciamento de Grupo
- `POST /api/party`: Cria um novo grupo.
- `POST /api/party/:party_id/add-member`: Adiciona um personagem ao grupo.
- `GET /api/party/:id`: Retorna informações do grupo.

## Tecnologias Utilizadas
- **Backend**: Ruby on Rails (API)
- **Banco de Dados**: PostgreSQL
- **Frontend**: React.js / Next.js
- **Autenticação**: JWT (JSON Web Token)
- **Hospedagem**: AWS ou DigitalOcean

## Futuras Implementações
- **Compatibilidade com VTTs (Roll20, Foundry)**
- **Modo Offline**
- **Sistema de Rolagem de Dados Integrado**
- **Sistema de Condições e Status**

---
Essa documentação cobre as funcionalidades principais do aplicativo, sua estrutura de dados e os endpoints da API. É um ponto de partida para o desenvolvimento de um microSaaS voltado para jogadores de RPG. Alguma parte precisa de mais detalhes?

