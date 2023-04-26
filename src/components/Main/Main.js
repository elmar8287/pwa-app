const Main = ({data}) => {
    return (
        <main className="text-center h-12 mt-16">
            {
                !data ?
                <div>
                    <h1>Add new request</h1>
                </div>
                :
                <p className="">Please, consider pressing + button to add the ne request</p>
            }
            
        </main>
    )
}

export default Main;