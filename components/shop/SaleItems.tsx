import Image from 'next/image'

interface propType{
  filter: string
}
const SaleItems = ({filter}: propType) => {



  const ContentList=[
    {
      name: "Mercelene Quad",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Quad",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Mercelene QuadX",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Port",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Rhino",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
    {
      name: "Mercelene",
      material: "Polythene",
      sizes: ['12"','15"','20"'],
      image: '/pin.webp',
      price: 200,
      brand: "Rhino",
      year: "2016"
    },
  ]

  if(filter){

  }
  return (
    <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 p-5 gap-6'>
      {
        ContentList.map((item, i) => (
          <div key={i}>
            <div className='pt-5 border h-75 flex-1 flex flex-col justify-center items-center rounded-4xl bg-gray-300 relative'>
                <Image fill src={item.image} alt='Options'/>
            </div>
            <div className='text-xl mt-1'>
              <h1 className=''>{item.name}</h1>
              <p className='text-gray-600'>{item.material}</p>
             <div className='flex gap-2'>
                {
                  item.sizes.map((size, i) => (
                    <p key={i} className='text-gray-600'>{size},</p>
                  ))
                }
             </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SaleItems