import "./Testimonials.css";
function Testimonials()
{
    const testimonials = [
        {
            id:1,
            name:"Rahul Sharma",
            role:"Frontend Developer",
            review:"This platform actually helped me to get my dream job"
        },
           {
            id:2,
            name:"Ajinkya Panwar",
            role:"Frontend Developer",
            review:"This platform is very beneficial for me to find good job opportunities"
        },
        
           {
            id:3,
            name:"Priya Sharma",
            role:"Beckend Developer",
            review:"The application process is simple and user-friendly"
        },
    ];
    return (
        <section className="testimonials">
            <div className="testimonials-heading">
                <h3>What Our Users Say</h3>
                <p>Success stories from job seekers.</p>
            </div>
            <div className="testimonial-container">
                {testimonials.map((user)=>(
                    <div className="testimonial-card" key={user.id}> 
                    <div className="profile-circle">{user.name.charAt(0)}</div>
                    <h4>{user.name}</h4>
                    <h5>{user.role}</h5>
                    <p>"{user.review}"</p> 
                    </div>
                    ))}
            </div>
        </section>
    )
}
export default Testimonials;