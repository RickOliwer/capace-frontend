import About from "./about";

const Pages = ({template}) => {

    return ( 
        
        <main className="my-6 mx-6 md:mx-10 lg:mx-28 md:my-10 lg:my-28">

            {template?.pageTemplate == 'About' ? (
                <About about={template}/>
            ) : null}

            {template?.pageTemplate == 'Services' ? (
                <h1>hello services</h1>
            ) : null}

            {template?.pageTemplate == 'Case' ? (
                <h1>hello case</h1>
            ) : null}

            {template?.pageTemplate == 'Contact' ? (
                <h1>hello contact</h1>
            ) : null}
        </main>
     );
}
 
export default Pages;