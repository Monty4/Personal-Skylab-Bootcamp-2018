render() {
    return <BrowserReouter>
        <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />

        </div>
    </BrowserReouter>

}
<HashRouter> incluye # y podemos copiar y pegar la url