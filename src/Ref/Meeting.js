import React from 'react'
import MeetingProfile from './MeetingProfile.js'

function Meeting() {
  return (
    <div>
        <MeetingProfile 
            profile="https://img.freepik.com/premium-psd/laptop-with-empty-space-isolated-alpha-layer_253984-7665.jpg?size=626&ext=jpg&ga=GA1.2.1160362396.1697048114&semt=ais"
            label='Meeting with Client'
            time="12 pm"
            className='border-b border-gray-200 pb-6 mt-8'
        />
        <MeetingProfile 
            profile="https://w7.pngwing.com/pngs/989/688/png-transparent-book-graphy-stacked-books-child-comic-book-photography-thumbnail.png"
            label='Weekly Report'
            time="03 pm"
            className='border-b border-gray-200 pb-6 mt-5'
        />
        <MeetingProfile 
            profile="https://img.freepik.com/premium-psd/3d-render-illustration-git-source-code-folder-isolated-premium-psd_454921-100.jpg?size=626&ext=jpg&ga=GA1.2.1160362396.1697048114&semt=ais"
            label='Daily Scrum Meeting'
            time="05 pm"
            className='mt-5'
        />
    </div>

  )
}

export default Meeting