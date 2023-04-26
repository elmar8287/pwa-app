const Main = ({data}) => {
    return (
        <main className="text-center h-12 mt-16">
            {
                !data ?
                <div>
                    <h1>Add new request</h1>
                </div>
                :
                <p className="">+ to add requestt</p>
            }
            
        </main>
    )
}

export default Main;