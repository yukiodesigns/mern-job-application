import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';

type Inputs = {
    jobTitle: string;
    companyName: string;
    minPrice: string;
    maxPrice: string;
    salaryType: string;
    jobLocation: string;
    postingDate: string;
    experienceLevel: string;
    description: string;
    companyLogo: string;
    employmentType: string;
    postedBy: string;
};


const UpdateJobs = () => {
    const {id} = useParams()
    const {_id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate, experienceLevel, companyLogo, employmentType, description, postedBy, skills} = useLoaderData()
  
    const [selectedOption, setSelectedOption] = useState(null);
    const [jobData, setJobData] = useState(null);
    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        data.skills = selectedOption;
        console.log(data);
        fetch(`http://localhost:5001/update-job/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result);
            setJobData(result);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };
  
    const options = [
        { value: "JavaScript", label: "JavaScript" },
        { value: "Python", label: "Python" },
        { value: "C++", label: "C++" },
        { value: "HTML", label: "HTML" },
        { value: "Django", label: "Django" },
        { value: "NextJs", label: "NextJs" },
        { value: "Node", label: "Node" },
        { value: "MongoDB", label: "MongoDB" },
    ];
    return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

            {/* Row 1 */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8 '>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Job Title</label>
                    <input
                        type='text'
                        defaultValue={jobTitle}
                        {...register("jobTitle")}
                        className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
                    />
                </div>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Company Name</label>
                    <input
                        type='text'
                        defaultValue={companyName}
                        {...register("companyName")}
                        className='create-job-input'
                    />
                </div>
            </div>

            {/* Row 2 */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Minimum Salary</label>
                    <input
                        type='text'
                        defaultValue={minPrice}
                        {...register("minPrice")}
                        className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
                    />
                </div>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Maximum Salary</label>
                    <input
                        type='text'
                        defaultValue={maxPrice}
                        {...register("maxPrice")}
                        className='create-job-input'
                    />
                </div>
            </div>

            {/* Row 3 */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Salary Type</label>
                    <select {...register("salaryType")} className='create-job-input'>
                        <option value={salaryType}>{salaryType}</option>
                        <option value='Hourly'>Hourly</option>
                        <option value='Monthly'>Monthly</option>
                        <option value='Yearly'>Yearly</option>
                    </select>
                </div>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Job Location</label>
                    <input
                        type='text'
                        defaultValue={jobLocation}
                        {...register("jobLocation")}
                        className='create-job-input'
                    />
                </div>
            </div>

            {/* Row 4 */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Job Posting Date</label>
                    <input
                        type='date'
                        defaultValue={postingDate}
                        {...register("postingDate")}
                        className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
                    />
                </div>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Experience Level</label>
                    <select {...register("experienceLevel")} className='create-job-input'>
                        <option value={experienceLevel}>{experienceLevel}</option>
                        <option value='NoExperience'>Any experience</option>
                        <option value='Internship'>Internship</option>
                        <option value='Work remotely'>Work remotely</option>
                    </select>
                </div>
            </div>

            {/* Row 5 */}
            <div>
                <label className='block mb-2 text-lg'>Required Skill Sets:</label>
                <CreatableSelect
                    className='create-job-input py-4'
                    defaultValue={skills}
                    onChange={setSelectedOption}
                    options={options}
                    isMulti
                />
            </div>

            {/* Row 6 */}
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Company Logo</label>
                    <input
                        type='url'
                        defaultValue={companyLogo}
                        {...register("companyLogo")}
                        className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
                    />
                </div>
                <div className='lg:w-1/2 w-full '>
                    <label className='block mb-2 text-lg'>Employment Type</label>
                    <select {...register("employmentType")} className='create-job-input'>
                        <option value={employmentType}>{employmentType}</option>
                        <option value='Temporary'>Temporary</option>
                        <option value='Full-time'>Full-time</option>
                        <option value='Part-time'>Part-time</option>
                    </select>
                </div>
            </div>

            {/* Row 7 */}
            <div className='-full'>
                <label className='block mb-2 text-lg'>Job Description</label>
                <textarea
                    {...register("description")}
                    className='w-full pl-3 py-1.5 focus:outline-none'
                    rows={6}
                    placeholder='Job Description'
                    defaultValue={description}
                />
            </div>

            {/* last row */}
            <div className='w-full'>
                <label className='block mb-2 text-lg'>Job Posted By</label>
                <input
                    type='email'
                    placeholder={postedBy}
                    {...register("postedBy")}
                    className='block w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 '
                />
            </div>

            <input
                type='submit'
                className='block mt-12 bg-blue text-white font-bold px-8 py-2 rounded-sm cursor-pointer '
            />
        </form>

        {jobData && (
            <div className='mt-8'>
                <h2 className='text-xl font-bold'>Posted Job</h2>
                <pre>{JSON.stringify(jobData, null, 2)}</pre>
            </div>
        )}
    </div>
</div>
  )
}

export default UpdateJobs