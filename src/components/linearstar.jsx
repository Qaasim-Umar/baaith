import React from 'react'
import Image from 'next/image'

const linearstar = ({firstnumber, secondImage, thirdImage, fourthImage}) => {
    return (
        <div>

            <div className="flex pl-5 gap-3">
                <p>{firstnumber}</p>
                <Image
                    src={secondImage}
                    alt="logo"
                    width={12}
                    height={56}
                />
                <Image
                    src={thirdImage}
                    alt="logo"
                    width={204}
                    height={56}
                />
                <p>{fourthImage}</p>
            </div>

        </div>
    )
}

export default linearstar