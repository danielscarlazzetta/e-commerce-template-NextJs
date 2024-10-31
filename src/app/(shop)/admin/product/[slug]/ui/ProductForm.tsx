"use client";

import { CategoryProduct, Product } from "@/interface";
import { useForm } from "react-hook-form";

interface Props {
    product: Product;
    categories: CategoryProduct[]
}

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];


interface FormInputs {
    title: string;
    slug: string;
    description: string;
    price: number;
    inStock: number;
    sizes: string[];
    tags: string;
    gender: "men" | "women" | "kid" | "unisex";
    categoryId: string;

    images?: FileList;
}


export const ProductForm = ({ product, categories }: Props) => {

    const {
        handleSubmit,
        register,
        formState: { isValid },

    } = useForm<FormInputs>({
        defaultValues: {
            ...product,
            tags: product.tags?.join(", "),
            sizes: product.sizes ?? [],

            images: undefined,
        }
    });


    const onSubmit = async( data: FormInputs) => {
        console.log({data})
    }




    return (
        <form onSubmit={handleSubmit(onSubmit)} className="grid px-5 mb-16 grid-cols-1 sm:px-0 sm:grid-cols-2 gap-3">
            {/* Textos */}
            <div className="w-full">
                <div className="flex flex-col mb-2">
                    <span className="font-bold text-pink-900 mt-4">Título</span>
                    <input type="text" className="p-2 border rounded-md bg-gray-300"
                        {...register('title', { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span className="font-bold text-pink-900 mt-4">Slug</span>
                    <input type="text" className="p-2 border rounded-md bg-gray-300"
                        {...register('slug', { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span className="font-bold text-pink-900 mt-4">Descripción</span>
                    <textarea
                        rows={5}
                        className="p-2 border rounded-md bg-gray-300"
                        {...register('description', { required: true })}
                    ></textarea>
                </div>

                <div className="flex flex-col mb-2">
                    <span className="font-bold text-pink-900 mt-4">Precio</span>
                    <input type="number" className="p-2 border rounded-md bg-gray-300"
                        {...register('price', { required: true })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span className="font-bold text-pink-900 mt-4">Tags</span>
                    <input type="text" className="p-2 border rounded-md bg-gray-300"
                        {...register('tags', { required: true, min: 0 })}
                    />
                </div>

                <div className="flex flex-col mb-2">
                    <span className="font-bold text-pink-900 mt-4">Gender</span>
                    <select className="p-2 border rounded-md bg-gray-300" {...register('gender', { required: true })}>
                        <option value="">[Seleccione]</option>
                        <option value="men">Men</option>
                        <option value="women">Women</option>
                        <option value="kid">Kid</option>
                        <option value="unisex">Unisex</option>
                    </select>
                </div>

                <div className="flex flex-col mb-2">
                    <span className="font-bold text-pink-900 mt-4">Categoria</span>
                    <select className="p-2 border rounded-md bg-gray-300" {...register('categoryId', { required: true })}>
                        <option value="">[Seleccione]</option>
                        {
                            categories.map(category => (
                                <option key={category.id} value={category.id}>{category.name}</option>
                            ))
                        }
                    </select>
                </div>

                <button className="btn-primary w-full">
                    Guardar
                </button>
            </div>

            {/* Selector de tallas y fotos */}
            <div className="w-full">
                {/* As checkboxes */}
                <div className="flex flex-col">

                    <span className="font-bold text-pink-900 mt-4">Tallas</span>
                    <div className="flex flex-wrap">

                        {
                            sizes.map(size => (
                                // bg-blue-500 text-white <--- si está seleccionado
                                <div key={size} className="flex  items-center justify-center w-10 h-10 mr-2 border rounded-md">
                                    <span>{size}</span>
                                </div>
                            ))
                        }

                    </div>


                    <div className="flex flex-col mb-2">

                        <span className="font-bold text-pink-900 mt-4">Fotos</span>
                        <input
                            type="file"
                            multiple
                            className="p-2 border rounded-md bg-gray-300"
                            accept="image/png, image/jpeg"
                        />

                    </div>

                    <div className="flex flex-col mb-2">

                        <span className="font-bold text-pink-900 mt-4">Fotos</span>
                        <div className="md:flex">
                            <div className="w-full p-3">
                                <div className="relative h-48 rounded-lg border-dashed border-2 border-pink-600 bg-gray-300 flex justify-center items-center">

                                    <div className="absolute">

                                        <div className="flex flex-col items-center">
                                            <i className="fa fa-folder-open fa-4x text-blue-700"></i>
                                            <span className="block text-gray-400 font-normal">Arrastra tus fotos</span>
                                        </div>
                                    </div>

                                    <input type="file" className="h-full w-full opacity-0" multiple accept="image/png, image/jpeg" />

                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </form>
    );
};