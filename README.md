# componente removido
<GridItem xs={12} sm={6} md={3}>
    <Card>
    <CardHeader color="warning" stats icon>
        <CardIcon color="warning">
        <Icon>content_copy</Icon>
        </CardIcon>
        <p className={classes.cardCategory}>Used Space</p>
        <h3 className={classes.cardTitle}>
        49/50 <small>GB</small>
        </h3>
    </CardHeader>
    <CardFooter stats>
        <div className={classes.stats}>
        <Danger>
            <Warning />
        </Danger>
        <a href="#pablo" onClick={(e) => e.preventDefault()}>
            Get more space
        </a>
        </div>
    </CardFooter>
    </Card>
</GridItem>

