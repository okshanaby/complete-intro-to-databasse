# Complete Intro to Databases, v2 — Notes & Projects

My notes and hands-on projects from the [**Complete Intro to Databases, v2**](https://frontendmasters.com/courses/databases-v2/) course by [Brian Holt](https://www.linkedin.com/in/btholt/) (working at **Microsoft** at the time of writing) on Frontend Masters.

It covers how to choose and work with the right database for the job — from relational SQL and PostgreSQL, through document and graph stores, key-value caching, and columnar analytics — plus practical Node.js integrations and modern Postgres features like JSONB, full-text search, and vector/RAG workflows.

- 📚 **Course:** https://frontendmasters.com/courses/databases-v2/
- 📝 **Official notes:** https://databases-v2.holt.courses/
- 👤 **My learning profile:** https://frontendmasters.com/u/okshanaby/

---

## What's inside

Each numbered folder is one section of the course. The `.md` files are my written notes; the `apps/` folder holds the working projects built along the way.

| Section | Topic | Highlights |
| --- | --- | --- |
| **1. Introduction** | Database basics | Terminology, queries, transactions & ACID |
| **2. SQL Fundamentals** | Relational / PostgreSQL | Tables, SELECT/CRUD, foreign keys, JOINs, subqueries & GROUP BY |
| **3. JSONB & Vector Search** | Advanced PostgreSQL | JSONB, indexes, full-text search, Node + Postgres, vector search & RAG with Ollama |
| **4. NoSQL Databases** | MongoDB | Documents, querying, updates, indexes, aggregation pipelines, Node + MongoDB |
| **5. Graph Databases** | Neo4j | Graph modeling, Cypher, complex traversals, Kevin Bacon problem, indexes, Node + Neo4j |
| **6. Key-Value Store Databases** | Redis | Key-value overview, datatypes, advanced features, Node + Redis |
| **7. Columnar Databases** | Analytics databases | Columnar storage, Delta Lake / Iceberg / Parquet, DuckDB, choosing the right database |

### Project folders

- **`apps/1. nodejs-with-postgres`** — Express + PostgreSQL (`pg`), plus embedding / RAG scripts (`embed.js`) for OpenAI and Ollama.
- **`apps/2. nodejs-with-mongodb`** — Express app backed by MongoDB.
- **`apps/3. nodejs-with-neo4j`** — Express app querying Neo4j with the official driver.
- **`apps/4. nodejs-with-redis`** — Express app using Redis as a key-value store / cache.
- **`apps/5. DuckDB`** — Local analytical queries over CSV with DuckDB.

---

## Skills

Skills demonstrated through these notes and projects — useful for recruiters and engineers scanning for database / backend capability.

### Databases & data modeling

- **PostgreSQL** — schema design, constraints, foreign keys, JOINs, subqueries, aggregation
- **MongoDB** — document modeling, CRUD, indexes, aggregation pipelines
- **Neo4j** — graph modeling, Cypher queries, multi-hop traversals, relationship-centric data
- **Redis** — key-value access patterns, Redis datatypes, caching-oriented use cases
- **DuckDB** — in-process OLAP / columnar analytics over local files (e.g. CSV)
- **Open table formats awareness** — Delta Lake, Apache Iceberg, Parquet

### Advanced PostgreSQL

- **JSONB** — storing and querying semi-structured data in a relational DB
- **Indexing** — B-tree / compound / unique indexes and when to use them
- **Full-text search** — Postgres FTS basics
- **Vector search & RAG** — embeddings, similarity retrieval, RAG pipelines with Ollama / OpenAI and Postgres

### Application integration

- **Node.js + Express** backends talking to multiple database engines
- **Official drivers / clients:** `pg`, `mongodb`, `neo4j-driver`, `redis`
- Connecting apps to **SQL, document, graph, and cache** stores from the same stack

### Database literacy (decision-making)

- Understanding **transactions / ACID** and why they matter
- Matching a **data model & access pattern** to the right database type
- Knowing when **not** to use RAG, caches, or exotic stores
- Evaluating tradeoffs: team skill, ops cost, drivers/SDKs, read vs write workload

### Keywords (ATS / search-friendly)

`PostgreSQL` · `SQL` · `MongoDB` · `NoSQL` · `Neo4j` · `Cypher` · `Redis` · `DuckDB` · `JSONB` · `Vector Search` · `RAG` · `Ollama` · `Full-Text Search` · `Database Design` · `Indexing` · `Aggregation` · `Node.js` · `Express` · `OLAP` · `Parquet`

---

## Key concepts covered

- **Database fundamentals** — what a database is, queries, transactions, and common terminology.
- **Relational SQL** — designing tables, writing SELECT/INSERT/UPDATE/DELETE, foreign keys, JOINs, subqueries, and GROUP BY in PostgreSQL.
- **Advanced Postgres** — JSONB documents, indexes (including compound and unique), full-text search, and wiring a Node.js app to PostgreSQL.
- **Vector search & RAG** — embeddings, retrieval-augmented generation with Ollama and PostgreSQL, and when RAG is the wrong tool.
- **Document databases** — MongoDB querying, updates, performance/indexes, and aggregation.
- **Graph databases** — Neo4j overview, complex Cypher queries, the 6 Degrees of Kevin Bacon problem, and query performance.
- **Key-value / caching** — Redis datatypes and advanced features, plus Node.js integration.
- **Columnar / analytics** — columnar storage concepts, lakehouse formats (Delta Lake, Iceberg, Parquet), DuckDB, and choosing the right database for the problem.

---

## Getting started

You'll need [Node.js](https://nodejs.org/) plus the database(s) for the section you're following — typically [PostgreSQL](https://www.postgresql.org/), [MongoDB](https://www.mongodb.com/), [Neo4j](https://neo4j.com/), [Redis](https://redis.io/), and/or [DuckDB](https://duckdb.org/). Optional for the RAG section: [Ollama](https://ollama.com/).

```sh
# Clone
git clone https://github.com/okshanaby/complete-intro-to-databasse.git
cd complete-intro-to-databasse

# Example: run the PostgreSQL app
cd apps/1.\ nodejs-with-postgres
npm install
node server.js
```

> The notes are best read top to bottom, section by section — they build on each other.

---

## Acknowledgements

All credit for the course material goes to **Brian Holt** and **Frontend Masters**. This repository is my personal study log while taking the course.
