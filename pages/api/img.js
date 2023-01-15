import Image from 'next/image'

function imgPage() {
return (
    <div>
        {['Api'].map((path) => {
            return (
                < div key={path}>
                    <Image src={`/${path}.jpg`} alt= 'Image'/>
            </div>
            )
        })}
    </div>
 )
}

export default imgPage