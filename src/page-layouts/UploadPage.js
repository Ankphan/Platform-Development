'use client';

import { useState, useContext } from 'react';
import {
	Box,
	Text,
	Flex,
	FormControl,
	Input,
	FormLabel,
	Button,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import { FileContext } from '@/context/FileProvider';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

const UploadPage = () => {
	const [open, setOpen] = useState(true);
	const [file, setFile] = useState(null);
	const router = useRouter();
	const { data: session } = useSession();
	// const { setFileData } = useContext(FileContext) || {};
	// const onFileSelected = () => {
	// 	const fileURL = URL.createObjectURL(file);
	// 	/*// console.log(fileURL);
	// 	setFileData(fileURL);
	// 	router.push('/render'); */
	// 	if (setFileData) {
	// 		setFileData(fileURL);
	// 	  }
	// 	  router.push('/render');
	// };

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				const formData = new FormData();
				formData.append('file', file);

				fetch('/api/upload-model', {
					method: 'POST',
					body: formData,
				});
			}}
		>
			{/* <Sidebar isOpen={open} onClose={() => setOpen(false)} /> */}
			<Flex
				h="100vh"
				p="8px"
				w="100vw"
				alignItems="center"
				justifyContent="center"
				flexDirection="column"
			>
				<Text fontSize="5xl">Welcome to ARIS Web View!</Text>
				<FormLabel htmlFor="model-input">
					<Flex
						h="200px"
						w="300px"
						border="3px solid"
						borderColor={'gray.500'}
						borderRadius={'12px'}
						mt="64px"
						alignItems="center"
						justifyContent="center"
						flexDir="column"
						transition={
							'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
						}
						willChange={'border-color'}
						_hover={{
							cursor: 'pointer',
							borderColor: 'gray.200',
							boxShadow: '0px 0px 40px 5px rgba(200,200,200,0.25)',
						}}
					>
						<DownloadIcon
							w={12}
							h={12}
							transform={'rotate(180deg)'}
							color={'gray.400'}
							mb="16px"
						/>
						<Text id="file-chosen">
							{file ? file.name : 'Select your model!'}
						</Text>
					</Flex>
				</FormLabel>
				<Input
					type="file"
					accept=".glb"
					id="model-input"
					hidden
					onChange={(event) => setFile(event.target?.files[0])}
					name="3d-model-upload"
				/>
				<Box>
					<Button
						// onClick={uploadFile}
						mt="16px"
						colorScheme="teal"
						variant="ghost"
						hidden={file ? false : true}
						type="submit"
					>
						Let&apos;s go!
					</Button>
				</Box>
			</Flex>
		</form>
	);
};

export default UploadPage;