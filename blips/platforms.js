[
    {
      blip: "Cassandra"
      ,ring: "adopt"
      ,description: "Supported Versions: 3.8+<br/>Patterns: Query-focused ICP<br/>Production: <br/>Deployment patterns: Terraform"
    },
    {
      blip: "Elasticsearch"
      ,ring: "adopt"
      ,description: "Supported Versions: 2.x, 5.x, 6.x (Soon, only 6.x)<br/>Patterns: Search, ICP<br/>Production: Search, ESOPS, ES5App<br/>Deployment patterns: Artisanal"
    },
    {
      blip: "GCP BigQuery"
      ,ring: "adopt"
      ,description: "Data lake and Analytics platform"
    },
    {
      blip: "Google Cloud"
      ,ring: "adopt"
      ,description: "n/a"
    },
    {
      blip: "SQL Server"
      ,ring: "adopt"
      ,description: "Supported versions: Linux only, 2017+<br/>Patterns: Strongly typed, strongly consistent relational data<br/>Production: Prodsql, SQLSF, SQLFG<br/>Deployment patterns: k8s, Ansible, Artisanal"
    },
    {
      blip: "Microsoft Azure"
      ,ring: "assess"
      ,description: "n/a"
    },
    {
      blip: "GCP Firebase"
      ,ring: "hold"
      ,description: "Due to the maturity of our patterns in terms of dynamically setting variables in a web service-hosted html file, we are not receommending Firebase or another CDN solution at this time"
    },
    {
      blip: "Redis (ObjectRocket)"
      ,ring: "sunset"
      ,description: "Supported Versions: N/A, cloud-based<br/>Patterns: Cache, ICP<br/>Production: Objectrocket -> Needs to move to memorystore<br/>Deployment Patterns: n/a"
    }, 
    {
      blip: "GCP Datastore"
      ,ring: "trial"
      ,description: "Supported Versions: N/A, cloud-based<br/>Patterns: ICP, persistent event store<br/>Prototypes, development not currently in production<br/>Deployment Patterns: n/a"
    },  
    {
      blip: "GCP PubSub"
      ,ring: "trial"
      ,description: "Supported Versions: N/A, cloud-based<br/>Patterns: Ephemeral Messaging<br/>Prototypes, development not currently in production<br/>Deployment Patterns: n/a"
    },
    {
      blip: "Kafka (Confluent Cloud)"
      ,ring: "trial"
      ,description: "Supported Versions: 1.0+, Confluent Cloud<br/>Patterns: Event Store, Persistent Messaging<br/>Prototypes only<br/>Deployment Patterns: n/a for Confluent Cloud, Artisanal and Ansible for self-managed"
    },
    {
      blip: "Redis (GCP Memorystore)"
      ,ring: "trial"
      ,description: "Supported Versions: N/A, cloud-based<br/>Patterns: Cache, ICP<br/>Production: Objectrocket -> Needs to move to memorystore<br/>Deployment Patterns: n/a"
    },
  ]
  