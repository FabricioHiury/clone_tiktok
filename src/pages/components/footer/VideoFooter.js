import React from 'react'
import "./VideoFooter.css"
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

function VideoFooter({name, description, music}) {
  return (
    <div className='videofooter'>
        <div className='videofooter_text'>
            <h3>@{ name }</h3>
            <p>{ description }</p>
            <div className='videofooter_music'>
                <GraphicEqIcon className='videofooter_icon'/>
                <div className='videofootermusic_text'>
                    <p>{ music }</p>
                </div>                
            </div>            
        </div>
        <img 
            className='videofooter_record'
            alt='Imagem vinil girando'
            src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'        
        />        
    </div>
  )
}

export default VideoFooter