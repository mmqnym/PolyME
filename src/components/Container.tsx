
function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full h-screen bg-black">
            {children}
        </div>
    )
}

export default Container