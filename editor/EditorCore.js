'use client';

import { useState } from 'react';
import FilePanel from './controls/FilePanel';
import { Flex } from '@chakra-ui/react';
import { Canvas } from '@react-three/fiber';
import SceneFiber from './scene/SceneObject';
import { SceneContext } from '@/context/SceneProvider';
import { CurrentSelectedModelProvider } from '@/context/CurrentSelectedModelProvider';

const CanvasObjectFiber = () => {
	const [scene, setScene] = useState(null);

	return (
		<SceneContext.Provider value={{ scene, setScene }}>
			<FilePanel />
			<Flex h="100vh" w="100vw" alignItems={'center'} justifyContent={'center'}>
				<CurrentSelectedModelProvider>
					<Canvas>
						<SceneFiber />
					</Canvas>
				</CurrentSelectedModelProvider>
			</Flex>
		</SceneContext.Provider>
	);
};

export default CanvasObjectFiber;
