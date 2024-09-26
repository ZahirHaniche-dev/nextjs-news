import { notFound } from 'next/navigation';
import { getNewsItem } from '../../../../../../lib/news';
import ModalBackdrop from '../../../../../../components/modal-backdrop';

export default async function InterceptedImagePage({params}) {

    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if(!newsItem) {
        notFound();
    }

    return (
    <>
        <ModalBackdrop />
        <dialog open>
            <div className='fullscreen-image'>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            </div>
        </dialog>
    </>
  )
}
