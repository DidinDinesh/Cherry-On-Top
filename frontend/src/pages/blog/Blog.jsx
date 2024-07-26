import './Blog.css'
import { assets } from "../../assets/assets"

const Blog = () => {
  return (
    <div className="blog">
        <div className="blog-container">
            <div className="blog-1">
                <div className="blog-image">
                    <img src={assets.blog_cake} alt="" />
                </div>
                <div className="blog-content">
                    <h3>The Ultimate Guide to Choosing the Perfect Cake for Any Occasion</h3>
                    <p>26-july-2024</p>
                    <hr />
                    <p>Choosing the perfect cake can be a daunting task, 
                    especially with so many flavors, designs, and sizes to 
                    choose from. Whether you're celebrating a birthday, 
                    wedding, anniversary, or any other special event, 
                    the right cake can make all the difference. Here's your 
                    ultimate guide to selecting the perfect cake for any occasion.
                    </p>
                    <button>Read More</button>
                </div>
            </div>

            <div className="blog-2">
                <div className="blog-image">
                    <img src={assets.blog_gift} alt="" />
                </div>
                <div className="blog-content">
                    <h3>Unique Gift Ideas to Make Your Loved Ones Feel Special</h3>
                    <p>26-july-2024</p>
                    <hr />
                    <p>Finding the perfect gift can be a delightful 
                        yet challenging task. Whether it's for a 
                        birthday, anniversary, holiday, or just to 
                        show appreciation, a unique gift can convey 
                        your love and thoughtfulness. From personalized 
                        items to creative experiences, explore these 
                        unique gift ideas that are sure to make your 
                        loved ones feel truly special and cherished.
                    </p>
                    <button>Read More</button>
                </div> 
            </div>    

            <div className="blog-2">
                <div className="blog-image">
                    <img src={assets.blog_flower} alt="" />
                </div>
                <div className="blog-content">
                    <h3>The Art of Giving Flowers: Making Every Bouquet Meaningful</h3>
                    <p>26-july-2024</p>
                    <hr />
                    <p>Flowers have long been a symbol of love, appreciation, 
                        and celebration. However, the key to making your 
                        floral gift truly special lies in the thought and 
                        meaning behind each bouquet. From choosing the right 
                        type of flowers to understanding their symbolism, 
                        discover how to select and present flowers in a way 
                        that perfectly conveys your heartfelt emotions and 
                        makes every moment unforgettable.
                    </p>
                    <button>Read More</button>
                </div> 
            </div>
      </div>
    </div>
  )
}

export default Blog
