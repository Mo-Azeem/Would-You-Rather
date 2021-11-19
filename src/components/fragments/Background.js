// This file is responsible for rendering the background of the app in every page.

function Background(props) {
    return (
        <div className="bg-gray-800 h-screen bg-background-pattern bg-cover bg-no-repeat flex flex-col items-center">
            {props.children}
        </div>
    )
}

export default Background;