import React from "react"
import styles from "./styles.module.css"
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


export const SigNozFeatures = () => {

    return(
        <section>
        <div
          className="container"
          style={{ marginTop: "6rem", marginBottom: "3rem" }}
        >
        <h1 class="text--center margin-vert--sm">
        A full-stack OpenTelemetry-Native APM for all your Observability needs
        </h1>

        <Tabs
        defaultValue="traces"
        values={[
            {label: 'Tracing', value: 'traces'},
            {label: 'Logs ', value: 'logs'},
            {label: 'Metrics ', value: 'metrics'},

            {label: 'Infrastructure ', value: 'infra'},
            {label: 'Exceptions ', value: 'exceptions'},
            {label: 'Alerts ', value: 'alerts'},
        ]}>

        <TabItem value="traces">
            
        <div className="row">
        <div className="col col--6">
            <img
                    src={"img/trace-detail.webp"}
                    alt="SigNoz screenshot"
            />
        </div>
        <div className="col col--6">
            <h3>Distributed Tracing</h3>
            <ul>
                <li> End-to-end visibility of your services with rich contextual tags and attributes </li>
                <li> Run advanced aggregates on trace data toget business relevant metrics </li>
                <li> Powerful filters to drive insights faster </li>
                <li> Flamegraphs and Gantt Charts to visualize flow of requests easily </li>
            </ul>

        </div>

        </div>

        </TabItem>

        <TabItem value="logs">

        <div className="row">
        <div className="col col--6">
            <img
                    src={"img/advanced-trace-filtering.webp"}
                    alt="SigNoz screenshot"
            />
        </div>
        <div className="col col--6">
            <h3>Logs Management</h3>
            <ul>
                <li> Native Support for OpenTelemetry Logs </li>
                <li> Advanced Log Query Builder to help you search & filter logs easily </li>
                <li> Automatic Log Collection from K8s cluster </li>
                <li> Uses Columnar Database (ClickHouse)  for lightening quick Log analytics [Logs Perf. benchmark] </li>
            </ul>

        </div>

        </div>

        </TabItem>

        <TabItem value="metrics">

        <div className="row">
        <div className="col col--6">
            <img
                    src={"img/trace-detail.webp"}
                    alt="SigNoz screenshot"
            />
        </div>
        <div className="col col--6">
            <h3>Distributed Tracing</h3>
            <ul>
                <li> End-to-end visibility of your services with rich contextual tags and attributes </li>
                <li> Run advanced aggregates on trace data toget business relevant metrics </li>
                <li> Powerful filters to drive insights faster </li>
                <li> Flamegraphs and Gantt Charts to visualize flow of requests easily </li>
            </ul>

        </div>

        </div>

        </TabItem>

        <TabItem value="infra">

        <div className="row">
        <div className="col col--6">
            <img
                    src={"img/trace-detail.webp"}
                    alt="SigNoz screenshot"
            />
        </div>
        <div className="col col--6">
            <h3>Distributed Tracing</h3>
            <ul>
                <li> End-to-end visibility of your services with rich contextual tags and attributes </li>
                <li> Run advanced aggregates on trace data toget business relevant metrics </li>
                <li> Powerful filters to drive insights faster </li>
                <li> Flamegraphs and Gantt Charts to visualize flow of requests easily </li>
            </ul>

        </div>

        </div>

        </TabItem>

        <TabItem value="exceptions">

        <div className="row">
        <div className="col col--6">
            <img
                    src={"img/trace-detail.webp"}
                    alt="SigNoz screenshot"
            />
        </div>
        <div className="col col--6">
            <h3>Distributed Tracing</h3>
            <ul>
                <li> End-to-end visibility of your services with rich contextual tags and attributes </li>
                <li> Run advanced aggregates on trace data toget business relevant metrics </li>
                <li> Powerful filters to drive insights faster </li>
                <li> Flamegraphs and Gantt Charts to visualize flow of requests easily </li>
            </ul>

        </div>

        </div>

        </TabItem>

        <TabItem value="alerts">
            
            
        </TabItem>

        </Tabs>

        </div>
        </section>
    
        )
}