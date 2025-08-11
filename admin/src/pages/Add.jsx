import React, { useStae } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";



const Add = () => {

    const [image1, setImage1] = useStae(false);
    const [image2, setImage2] = useStae(false);
    const [image3, setImage3] = useStae(false);
    const [image4, setImage4] = useStae(false);

    const [name, setName] = useStae('');
    const [description, setDescription] = useStae('');
    const [price, setPrice] = useStae('');
    const [category, setCategory] = useStae('Men');
    const [subCategory, setSubCategory] = useStae('Topwear');
    const [bestseller, setBestseller] = useStae('Men');
    const [sizes, setSizes] = useStae([]);

    return (
        <form className='flex flex-col w-full items-start gap-3'>
            <div>
                {/* ------------------------------Upload Image-------------------- */}
                <p className='text-gray-700 mb-2'>Upload Image</p>
                <div className='flex items-center gap-2'>
                    <label htmlFor="image1">
                        <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                            <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                            <p className='text-xs text-gray-400'>upload</p>
                        </div>
                        <input type="file" id="image1" hidden />
                    </label>

                    <label htmlFor="image2">
                        <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                            <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                            <p className='text-xs text-gray-400'>upload</p>
                        </div>
                        <input type="file" id="image2" hidden />
                    </label>

                    <label htmlFor="image3">
                        <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                            <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                            <p className='text-xs text-gray-400'>upload</p>
                        </div>
                        <input type="file" id="image3" hidden />
                    </label>

                    <label htmlFor="image3">
                        <div className='border border-gray-400 border-dashed rounded-sm px-4 py-2'>
                            <IoCloudUploadOutline className='h-8 w-8 text-gray-400' />
                            <p className='text-xs text-gray-400'>upload</p>
                        </div>
                        <input type="file" id="image3" hidden />
                    </label>
                </div>
            </div>

            {/* --------------------------------Product Name ----------------------------- */}
            <div className='w-full'>
                <p className='text-gray-700'>Product name</p>
                <input className='w-full max-w-[500px] mt-2 border border-gray-300 outline-none px-3 py-2 rounded-sm' type="text" placeholder='Type here' required />
            </div>

            {/* -----------------------Product Description---------------------- */}
            <div className='w-full'>
                <p className='text-gray-700'>Product description</p>
                <textarea className='w-full max-w-[500px] mt-2 border border-gray-300 outline-none px-3 py-2 rounded-sm' type="text" placeholder='Write content here' />
            </div>

            {/*------------- categories---------- */}

            <div className='flex flex-col sm:flex-row w-full gap-2 sm:gap-8'>

                {/*------------- Product category---------- */}
                <div>
                    <p className='text-gray-700 mb-2'>Product category</p>
                    <select className='w-full border border-gray-300 rounded-sm outline-none px-3 py-2 text-gray-600'>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>

                {/*------------- Sub category---------- */}
                <div>
                    <p className='text-gray-700 mb-2'>Sub category</p>
                    <select className='w-full border border-gray-300 rounded-sm outline-none px-3 py-2 text-gray-600'>
                        <option value="Topwear">Topwear</option>
                        <option value="Bottomwear">Bottomwear</option>
                        <option value="Shirts">Shirts</option>
                        <option value="T-Shirts">T-Shirts</option>
                        <option value="Polo-Shirts">Polo-Shirts</option>
                        <option value="Trousers">Trousers</option>
                        <option value="Jeans">Jeans</option>
                        <option value="Oversized">Oversized</option>
                        <option value="Cargo Pants">Cargo Pants</option>
                        <option value="Joggers">Joggers</option>
                        <option value="Sweaters">Sweaters</option>
                        <option value="Hoodies">Hoodies</option>
                        <option value="Jackets">Sweatshirts</option>
                        <option value="Shackets">Shackets</option>
                        <option value="Co-Ords">Co-Ords</option>
                    </select>
                </div>

                {/*------------- Product Price---------- */}
                <div className=''>
                    <p className='text-gray-700 mb-2'>Product Price</p>
                    <input className='w-full sm:w-[120px] border border-gray-300 rounded-sm outline-none px-3 py-2 text-gray-600' type="number" placeholder='25' />
                </div>

            </div>


            {/*------------- Product Sizes---------- */}
            <div>
                <p className='text-gray-700 mb-2'>Product Sizes</p>
                <div className='flex gap-3'>
                    <div>
                        <p className='px-3 py-1 bg-slate-200 cursor-pointer text-gray-700'>S</p>
                    </div>

                    <div>
                        <p className='px-3 py-1 bg-slate-200 cursor-pointer text-gray-700'>M</p>
                    </div>

                    <div>
                        <p className='px-3 py-1 bg-slate-200 cursor-pointer text-gray-700'>L</p>
                    </div>

                    <div>
                        <p className='px-3 py-1 bg-slate-200 cursor-pointer text-gray-700'>XL</p>
                    </div>

                    <div>
                        <p className='px-3 py-1 bg-slate-200 cursor-pointer text-gray-700'>XXL</p>
                    </div>
                </div>
            </div>

            {/*------------- Add to bestseller---------- */}
            <div className='flex gap-2 mt-2'>
                <input type="checkbox" />
                <label className='text-gray-700' htmlFor="">Add to bestseller</label>
            </div>

            {/* -------------submitButton---------------------- */}
            <button type='submit' className='bg-black text-white px-10 py-2 text-center active:bg-gray-800 rounded-sm'>ADD</button>
        </form>


    )
}

export default Add
