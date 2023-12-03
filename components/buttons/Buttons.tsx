const Buttons = ({text , onSubmit} : {text:string , onSubmit : any}) => {
  return (
    <button className='bg-button-color my-3 p-4 w-full text-white rounded-lg' onClick={onSubmit}> {text}</button>
  )
}

export default Buttons