const Address=({country,city,province})=>{
    return(
        <div>
            <p>Country: {country}</p>
            <p>City: {city}</p>
            <p>Province: {province}</p>
        </div>
    );
};

export default Address; // This component takes in three props: country, city, and province. It then renders a div containing three paragraphs that display the values of these props.