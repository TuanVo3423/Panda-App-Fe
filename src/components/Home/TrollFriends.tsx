import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Friends from './Friends';

const TrollFriends = () => {
    return (
        <View className='mt-8 mx-5 border-b-[0.5px] border-gray-300 pb-8'>
            <View className='flex-row items-center'>
                <View className='flex-row items-center space-x-2 flex-1'>
                    <Text className='text-base font-bold'>Choc ban</Text>
                    <AntDesign name='questioncircle' size={20} color={'#d3d3d3'} />
                </View>
                <AntDesign name='right' size={20} />
            </View>
            <View className='mt-4 flex-row'>
                <Friends avaUri='https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/350139448_463402646008447_7630466807499924458_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCys2fqKnIklMNFaXSpMIlJzTTfctXzOUnNNN9y1fM5bGPQFevypzmed9-SxJyxxl8DZ2NR75AG7vlJiKqqqIB&_nc_ohc=WQMUhICCvHwAX-RM9Mo&_nc_oc=AQlnz2N-eKxjfboEGiXNwdtjooZjGFPIZs9eEUyakxrm8AOQk720klk_UVtXh0Rkt7r5dchiZXRDOW0hZL2hw9mC&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjqlxaaM-QJdVQi0tUFC8KzPQzkje5diPdlgBYYhpuEg&oe=65FB9898'
                name='Tho cute <3'/>
                <Friends avaUri='https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/350139448_463402646008447_7630466807499924458_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCys2fqKnIklMNFaXSpMIlJzTTfctXzOUnNNN9y1fM5bGPQFevypzmed9-SxJyxxl8DZ2NR75AG7vlJiKqqqIB&_nc_ohc=WQMUhICCvHwAX-RM9Mo&_nc_oc=AQlnz2N-eKxjfboEGiXNwdtjooZjGFPIZs9eEUyakxrm8AOQk720klk_UVtXh0Rkt7r5dchiZXRDOW0hZL2hw9mC&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjqlxaaM-QJdVQi0tUFC8KzPQzkje5diPdlgBYYhpuEg&oe=65FB9898'
                name='Tho cute <3'/>
                <Friends avaUri='https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/350139448_463402646008447_7630466807499924458_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCys2fqKnIklMNFaXSpMIlJzTTfctXzOUnNNN9y1fM5bGPQFevypzmed9-SxJyxxl8DZ2NR75AG7vlJiKqqqIB&_nc_ohc=WQMUhICCvHwAX-RM9Mo&_nc_oc=AQlnz2N-eKxjfboEGiXNwdtjooZjGFPIZs9eEUyakxrm8AOQk720klk_UVtXh0Rkt7r5dchiZXRDOW0hZL2hw9mC&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjqlxaaM-QJdVQi0tUFC8KzPQzkje5diPdlgBYYhpuEg&oe=65FB9898'
                name='Tho cute <3'/>
                <Friends avaUri='https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/350139448_463402646008447_7630466807499924458_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHCys2fqKnIklMNFaXSpMIlJzTTfctXzOUnNNN9y1fM5bGPQFevypzmed9-SxJyxxl8DZ2NR75AG7vlJiKqqqIB&_nc_ohc=WQMUhICCvHwAX-RM9Mo&_nc_oc=AQlnz2N-eKxjfboEGiXNwdtjooZjGFPIZs9eEUyakxrm8AOQk720klk_UVtXh0Rkt7r5dchiZXRDOW0hZL2hw9mC&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAjqlxaaM-QJdVQi0tUFC8KzPQzkje5diPdlgBYYhpuEg&oe=65FB9898'
                name='Tho cute <3'/>
                
            </View>
        </View>

    )
}

export default TrollFriends