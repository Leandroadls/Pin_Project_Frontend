
function ProductsList(props) {
  return (
    <div>
        {console.log(props.products)}
        {props.products.map((product, index)=> {
            return (
                <li>

                </li>
            )
        })}
    
    </div>;
  )
  
}

export default ProductsList