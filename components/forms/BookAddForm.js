import { useState, useEffect, useContext } from 'react'

import SnackbarContext from '../../store/snackbarContext'
import { createBook } from '../../API/books'
import GenreListModal from '../../components/modals/GenreListModal'
import ImageIcon from '../../assets/icons/ImageIcon'
import PlusIcon from '../../assets/icons/PlusIcon'

function BookAddForm({ selectBookHandler, saveBook }) {
	const snackbarCtx = useContext(SnackbarContext)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [ISBN_10, setISBN_10] = useState('')
	const [ISBN_13, setISBN_13] = useState('')
	const [image, setImage] = useState('')
	const [language, setLanguage] = useState('')
	const [publisher, setPublisher] = useState('')
	const [publicationDate, setPublicationDate] = useState('')
	const [genre, setGenre] = useState('')
	const [genreList, setGenreList] = useState([])

	useEffect(() => {
		if (saveBook) {
			;(async () => {
				const book = { title, description, ISBN_10, ISBN_13, image, language, publisher, publicationDate }
				const data = await createBook(book)
				if (!data.book) snackbarCtx.addMessage({ title: data })
				else selectBookHandler(data.book)
			})()
		}
	}, [saveBook])

	const genreAddHandler = () => {
		if (genre?.length > 2) {
			setGenreList([...genreList, genre])
			setGenre('')
		} else snackbarCtx.addMessage({ title: 'Please enter a valid genre' })
	}

	return (
		<form>
			<div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<div className='col-span-full'>
					<label htmlFor='title' className='block text-sm font-medium leading-6 text-white'>
						Title
					</label>
					<div className='mt-1.5'>
						<input
							type='text'
							name='title'
							id='title'
							autoComplete='title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className='block w-full rounded-md border-[1px] px-2 py-1.5 bg-[#192136] text-white shadow-sm border-gray-700 placeholder:text-gray-400 focus:border-2 focus:border-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>
				<div className='col-span-full'>
					<label htmlFor='description' className='block text-sm font-medium leading-6 text-white'>
						Description
					</label>
					<div className='mt-1.5'>
						<textarea
							id='description'
							name='description'
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							rows='3'
							placeholder='Write a few sentences about this book'
							className='block w-full rounded-md border-[1px] px-2 py-1.5 bg-[#192136] text-white shadow-sm border-gray-700 placeholder:text-gray-400 focus:border-2 focus:border-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='col-span-full'>
					<label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-white'>
						Cover photo
					</label>
					<div className='mt-1.5 flex justify-center w-2/3 rounded-lg border border-dashed border-gray-600 py-4'>
						<div className='flex flex-col items-center justify-center pb-1'>
							<ImageIcon />
							<div className='flex text-sm leading-6 text-gray-400'>
								<label
									htmlFor='file-upload'
									className='relative cursor-pointer rounded-md font-semibold text-[#8C6AFF] focus-within:outline-none focus-within:border-2 focus-within:border-[#8C6AFF] focus-within:border-offset-2 hover:text-indigo-500'>
									<span>Upload a file</span>
									<input
										id='file-upload'
										name='file-upload'
										type='file'
										onChange={(e) => console.log('File event', e)}
										className='sr-only'
									/>
								</label>
								<p className='text-sm leading-5 text-gray-400 pl-1'>or drag and drop</p>
							</div>
							<p className='text-sm leading-5 text-gray-400'>PNG, JPG up to 1MB</p>
						</div>
					</div>
				</div>

				<div className='sm:col-span-3'>
					<label htmlFor='ISBN_10' className='block text-sm font-medium leading-6 text-white'>
						ISBN 10
					</label>
					<div className='mt-1.5'>
						<input
							type='text'
							name='ISBN_10'
							id='ISBN_10'
							autoComplete='ISBN_10'
							value={ISBN_10}
							onChange={(e) => setISBN_10(e.target.value)}
							className='block w-full rounded-md border-[1px] px-2 py-1.5 bg-[#192136] text-white shadow-sm border-gray-700 placeholder:text-gray-400 focus:border-2 focus:border-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='sm:col-span-3'>
					<label htmlFor='ISBN_13' className='block text-sm font-medium leading-6 text-white'>
						ISBN 13
					</label>
					<div className='mt-1.5'>
						<input
							type='text'
							name='ISBN_13'
							id='ISBN_13'
							autoComplete='ISBN_13'
							value={ISBN_13}
							onChange={(e) => setISBN_13(e.target.value)}
							className='block w-full rounded-md border-[1px] px-2 py-1.5 bg-[#192136] text-white shadow-sm border-gray-700 placeholder:text-gray-400 focus:border-2 focus:border-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='col-span-full'>
					<label htmlFor='language' className='block text-sm font-medium leading-6 text-white'>
						Language
					</label>
					<div className='mt-1.5'>
						<select
							id='language'
							name='language'
							autoComplete='language-name'
							value={language}
							onChange={(e) => setLanguage(e.target.value)}
							className='block w-full rounded-md border-[1px] p-2 bg-[#192136] text-white shadow-sm focus:border-2 focus:border-[#8C6AFF] sm:max-w-xs sm:text-sm sm:leading-6'>
							<option>English</option>
							<option>Hindi</option>
							<option>Bangla</option>
							<option>Punjabi</option>
							<option>Marathi</option>
							<option>Telugu</option>
						</select>
					</div>
				</div>
				<div className='sm:col-span-3 sm:col-start-1'>
					<label htmlFor='publisher' className='block text-sm font-medium leading-6 text-white'>
						Publisher
					</label>
					<div className='mt-1.5'>
						<input
							type='text'
							name='publisher'
							id='publisher'
							value={publisher}
							onChange={(e) => setPublisher(e.target.value)}
							autoComplete='publisher'
							className='block w-full rounded-md border-[1px] px-2 py-1.5 bg-[#192136] text-white shadow-sm border-gray-700 placeholder:text-gray-400 focus:border-2 focus:border-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='sm:col-span-3'>
					<label htmlFor='publication-date' className='block text-sm font-medium leading-6 text-white'>
						Publication Date
					</label>
					<div className='mt-1.5'>
						<input
							type='date'
							name='publication-date'
							id='publication-date'
							value={publicationDate}
							onChange={(e) => setPublicationDate(e.target.value)}
							autoComplete='publication-date'
							className='block w-full rounded-md border-[1px] px-2 py-1.5 bg-[#192136] text-white shadow-sm border-gray-700 placeholder:text-gray-400 focus:border-2 focus:border-[#8C6AFF] sm:text-sm sm:leading-6'
						/>
					</div>
				</div>

				<div className='col-span-full'>
					<div className='flex flex-wrap items-center justify-start gap-4'>
						{genreList?.map((genre, i) => (
							<button
								className='rounded-full py-1 px-2 xl:p-2 xl:px-3 font-medium bg-[#334366] text-white'
								key={i}>
								{genre}
							</button>
						))}
					</div>
					<div className='relative my-4'>
						<input
							value={genre}
							onChange={(e) => setGenre(e.target.value)}
							placeholder='Add genre'
							type='text'
							className='input-field box-border'
						/>
						<div
							className='absolute top-3.5 right-1.5 bg-[#111844] p-3 xl:p-3.5 rounded-lg box-border cursor-pointer'
							onClick={genreAddHandler}>
							<PlusIcon dimensions='h-6 w-6' />
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}

export default BookAddForm
