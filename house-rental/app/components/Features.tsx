export default function Features() {
    const features = [
        {
            icon: 'fa-search',
            title: 'Smart Search',
            description: 'Browse thousands of verified properties with advanced filters to find your perfect match.'
        },
        {
            icon: 'fa-home',
            title: 'List Properties',
            description: 'Property owners can easily list their properties and connect with potential tenants.'
        },
        {
            icon: 'fa-comments',
            title: 'Direct Communication',
            description: 'Our platform enables seamless communication between tenants and property owners.'
        },
        {
            icon: 'fa-file-contract',
            title: 'Secure Agreements',
            description: 'Finalize rental agreements online with our secure and legally compliant tools.'
        }
    ];

    return (
        <section className="features">
            <div className="section-header">
                <div className="section-tag">Our Benefits</div>
                <h2>Why Choose <span className="accent">HomeHaven</span>?</h2>
                <p>We make the rental process simple and efficient for both tenants and property owners.</p>
            </div>
            
            <div className="feature-cards">
                {features.map((feature, index) => (
                    <div key={index} className="feature-card">
                        <div className="feature-icon">
                            <i className={`fas ${feature.icon}`}></i>
                        </div>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 