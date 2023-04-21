import { useState, useEffect, useContext } from 'react'

import SnackbarContext from '../../store/snackbarContext'
import { createBook } from '../../API/books'
import ImageIcon from '../../assets/icons/ImageIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import CrossIcon from '../../assets/icons/CrossIcon'
import SelectMenu from '../ui/SelectMenu'

function BookAddForm({ saveBook, selectBookHandler, setAddBookModal }) {
	const snackbarCtx = useContext(SnackbarContext)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [ISBN_10, setISBN_10] = useState('')
	const [ISBN_13, setISBN_13] = useState('')
	const [image, setImage] = useState('')
	const [language, setLanguage] = useState('')
	const [publisher, setPublisher] = useState('')
	const [publicationDate, setPublicationDate] = useState('')
	const [inputGenre, setInputGenre] = useState('')
	const [genreList, setGenreList] = useState([])

	useEffect(() => {
		if (saveBook) {
			;(async () => {
				const book = { title, description, ISBN_10, ISBN_13, image, language, publisher, publicationDate }
				const data = await createBook(book)
				if (!data.book) snackbarCtx.addMessage({ title: data, status: 'fail' })
				else {
					selectBookHandler(data.book)
					setAddBookModal(false)
				}
				//  else snackbarCtx.addMessage({ title: 'Please enter correct book details' })
			})()
		}
	}, [saveBook])

	const genreAddHandler = () => {
		if (inputGenre?.length > 2) {
			setGenreList([...genreList, inputGenre])
			setInputGenre('')
		} else snackbarCtx.addMessage({ title: 'Please enter a valid genre', status: 'fail' })
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
					<SelectMenu
						title='Language'
						selectedOption={language}
						selectOptionHandler={setLanguage}
						options={['English', 'Hindi', 'Bangla', 'Punjabi', 'Marathi', 'Telugu']}
					/>
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
					<div className='flex flex-wrap items-center justify-start gap-x-4'>
						{genreList?.map((genre, i) => (
							<div className='flex rounded-full bg-[#334366] text-white' key={i}>
								<p className='font-medium py-1 px-2 xl:p-2 xl:px-3 '>{genre}</p>
								<div className='rounded-full bg-slate-700 p-2 cursor-pointer'>
									<CrossIcon dimensions='h-6 w-6' color='#334366' />
								</div>
							</div>
						))}
					</div>
					<div className='relative my-4'>
						<input
							value={inputGenre}
							onChange={(e) => setInputGenre(e.target.value)}
							placeholder='Add genre'
							type='text'
							style={{ padding: '0.75rem' }}
							className='input-field box-border'
						/>
						<div
							className='absolute top-2.5 right-0.5 bg-[#111844] p-3.5 rounded-lg box-border cursor-pointer'
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
