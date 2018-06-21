import CMS from 'netlify-cms'

import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('contact', ContactPagePreview)
